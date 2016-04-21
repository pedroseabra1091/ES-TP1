from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import distinct
from model import Car, Dealership, Owner

searchSomeCars = Blueprint('searchSomeCars',__name__)

@searchSomeCars.route('/api/v1/searchSomeCars',methods = ['POST']) 
def search_cars():

	print 'searching for cars...'

	filterFuel = request.json['cft']
	filterBrand = request.json['cb']
	filterModel = request.json['cm']
	filterLocation = request.json['cl']
	filterMinPrice = request.json['cpmin']
	filterMaxPrice = request.json['cpmax']


	allFuels = [{'name':'all'}]
	allBrands = [{'name':'all'}]
	allModels = [{'name': 'all'}]
	allLocations = [{'name' : 'all'}]
	allCars = []
	
	Session = sessionmaker(bind=engine)
	session = Session()

	af = session.query(distinct(Car.fuelType)).all()
	print ('All Fuel Types: ')
	for something in af:
		print something
		allFuels.append({'name':something})

	ab = session.query(distinct(Car.brand)).all()
	print ('AllBrands: ')
	for something in ab:
		print something
		allBrands.append({'name':something})

	if filterBrand != 'all':
		am = session.query(distinct(Car.model)).filter(Car.brand==filterBrand).all()

	al = session.query(distinct(Dealership.location)).filter(Car.dealershipID==Dealership.id).all()
	print ('All car locations(dealership locations that have cars): ')
	for something in al:
		print something
		allLocations.append({'name':something})
	
	ac = session.query(Car)

	print 'Before filtering'

	if filterFuel != 'all':
		ac = ac.filter(Car.fuelType == filterFuel)

	print 'After filtering'

	ret = ac.all()

	for car in ret:
		allCars.append({'id' : car.id, 'brand' : car.brand})

	return jsonify(fuelList = allFuels, brandsList = allBrands, locationsList = allLocations, carList = allCars)
