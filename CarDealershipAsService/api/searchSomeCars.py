from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import distinct
from model import Car, Dealership, Owner

searchSomeCars = Blueprint('searchSomeCars',__name__)

@searchSomeCars.route('/api/v1/searchSomeCars',methods = ['POST']) 
def search_cars():
	message = ""

	print 'searching for cars...'

	filterFuel = request.json['cft']
	filterBrand = request.json['cb']
	filterModel = request.json['cm']
	filterLocation = request.json['cl']
	filterMinPrice = request.json['cpmin']
	filterMaxPrice = request.json['cpmax']
	filterMinKm = request.json['kmmin']
	filterMaxKm = request.json['kmmax']


	allFuels = [{'name':'all', 'key':'0'}]
	allBrands = [{'name':'all'}]
	allModels = [{'name': 'all'}]
	allLocations = [{'name' : 'all'}]
	allCars = []
	
	Session = sessionmaker(bind=engine)
	session = Session()

	af = session.query(distinct(Car.fuelType)).all()
	print ('All Fuel Types: ')
	i=0
	for something in af:
		i+=1
		allFuels.append({'name':str(something[0]), 'key':str(i)});

	print allFuels

	ab = session.query(distinct(Car.brand)).all()
	print ('AllBrands: ')
	i=0
	for something in ab:
		i+=1
		allBrands.append({'name':str(something[0]), 'key':str(i)})
	print allBrands

	print (' All models')
	i=0
	if filterBrand != 'all':
		am = session.query(distinct(Car.model)).filter(Car.brand==filterBrand).all()
		for something in am:
			i+=1
			allModels.append({'name':str(something[0]), 'key':str(i)})
	print allModels

	al = session.query(distinct(Dealership.location)).filter(Car.dealershipID==Dealership.id).all()
	print ('All car locations(dealership locations that have cars): ')
	i=0
	for something in al:
		i+=1
		allLocations.append({'name':str(something[0]), 'key':str(i)})
	
	print allLocations

	ac = session.query(Car).filter(Car.dealershipID == Dealership.id)

	print 'My filters:'
	print 'fuel:'+filterFuel
	print 'brand:'+filterBrand
	print 'model:'+filterModel
	print 'location:'+filterLocation
	print 'minprice:' + str(filterMinPrice)
	print 'maxprice:' + str(filterMaxPrice)


	if filterFuel != 'all':
		ac = ac.filter(Car.fuelType == filterFuel)
	if filterBrand != 'all':
		ac = ac.filter(Car.brand == filterBrand)
	if filterModel != 'all':
		ac = ac.filter(Car.model == filterModel)
	if filterLocation != 'all':
		ac = ac.filter(Dealership.location == filterLocation)
	if filterMaxPrice > 0:
		ac = ac.filter(Car.price <= filterMaxPrice)
	ac = ac.filter(Car.price >= filterMinPrice)
	if filterMaxKm > 0:
		if filterMaxKm >= filterMinKm:
			ac = ac.filter(Car.mileage <= filterMaxKm)
			ac = ac.filter(Car.mileage >= filterMinKm)
		else:
			message = "Max Km has to be higher than Min Km"
	ac = ac.filter(Car.mileage >= filterMinKm)
	

	ret = ac.all()

	for car in ret:
		allCars.append({
			'id' : car.id,
			'dealershipID' : car.dealershipID,
			'ownerID' : car.ownerID,
			'brand' : car.brand,
			'model' : car.model,
			'color' : car.color,
			'plate' : car.plate,
			'mileage' : car.mileage,
			'fuelType' : car.fuelType,
			'price' : car.price,
			'year' : car.year
		})

	return jsonify(fuelList = allFuels, brandsList = allBrands, locationsList = allLocations, carList = allCars, modelsList = allModels, feedback = message)
