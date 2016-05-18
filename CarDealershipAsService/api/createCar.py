from flask import current_app as app
from db import engine
from flask import Flask,request,Blueprint,jsonify
import boto
from boto.s3.key import Key
from flask_wtf.file import FileField
from model import Car, Dealership
from sqlalchemy.orm import sessionmaker

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