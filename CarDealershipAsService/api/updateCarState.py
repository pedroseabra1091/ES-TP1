from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Car, Dealership

updateCarState = Blueprint('updateCarState',__name__)

@updateCarState.route('/api/v1/updateCarState',methods = ['POST']) 
def create_Car():

	userId = request.json['id']
	idDealership = request.json['chosenDealership']
	print "id dealership is "
	print idDealership
	print request.json['mileage']

	
	Session = sessionmaker(bind=engine)
	session = Session()
	
	session.query(Car).filter(Car.id == int(request.json['carID'])).\
		update({
			Car.dealershipID : int(idDealership), 
			Car.brand : request.json['brand'], 
			Car.model : request.json['model'], 
			Car.color : request.json['color'] , 
			Car.plate : request.json['plate'], 
			Car.mileage : int(request.json['mileage']), 
			Car.fuelType : request.json['fuelType'],
			Car.year : int(request.json['year']),
			Car.price : int(request.json['price'])},synchronize_session=False)

	#dealership = session.query(Dealership).filter_by(id = idDealership).first()
	#car = Car(ownerID = userId,dealershipID = idDealership, brand = request.json['brand'], model = request.json['model'], color = request.json['color'] , plate = request.json['plate'], mileage = request.json['mileage'], fuelType = request.json['fuelType'],year = request.json['year'],price = request.json['price'])
	#dealership.cars.append(car)
	#session.add(car)
	session.commit()

	return jsonify({'message' : 'New car changed'})