from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Car, Dealership

createCar = Blueprint('createCar',__name__)

@createCar.route('/api/v1/createCar',methods = ['POST']) 
def create_Car():

	userId = request.json['id']
	idDealership = request.json['dealership']
	
	Session = sessionmaker(bind=engine)
	session = Session()
	
	dealership = session.query(Dealership).filter_by(id = idDealership,ownerID = userId).first()
	car = Car(ownerID = userId,brand = request.json['brand'], model = request.json['model'], color = request.json['color'] , plate = request.json['plate'], mileage = request.json['mileage'], fuelType = request.json['fuelType'],year = request.json['year'],price = request.json['price'])
	dealership.cars.append(car)
	session.add(car)
	session.commit()

	return jsonify({'message' : 'New car inserted'})