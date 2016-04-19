from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Car, Dealership, Owner

createCar = Blueprint('createCar',__name__)

@createCar.route('/api/v1/createCar',methods = ['POST']) 
def create_Car():

	userId = request.json['id']
	pickedDealership = request.json['dealership']
	
	Session = sessionmaker(bind=engine)
	session = Session()
	
	owner = session.query(Owner).filter_by(id = userId)
	dealership = session.query(Dealership).filter_by(ownerId = userId)
	
	'''car = Car(brand = request.json['brand'], model = request.json['model'], color = request.json['color'] , plate = request.json['plate'], mileage = request.json['mileage'], fuelType = request.json['fuelType'],year = request.json['year'],price = request.json['price'])
	dealership.cars.append(car)
	session.add(car)
	session.commit()'''

	return jsonify({'message' : 'New car inserted'})