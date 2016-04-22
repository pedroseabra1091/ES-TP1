from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker, aliased
from model import Car, Dealership, Owner

viewMyCars = Blueprint('viewMyCars',__name__)

@viewMyCars.route('/api/v1/viewMyCars',methods = ['POST']) 
def check_dealerships():

	userId = request.json['id']
	car_list = []
	owner_dealershipList = []
	
	Session = sessionmaker(bind=engine)
	session = Session()

		

	for car in session.query(Car,Dealership.name).filter(Car.dealershipID == Dealership.id, Car.ownerID == userId).all():
		print car.Car.id
		car_list.append({
			'id' : car.Car.id,
			'dealershipID' : car.Car.dealershipID,
			'ownerID' : car.Car.ownerID,
			'dealership_name' : car.name,
			'brand' : car.Car.brand,
			'model' : car.Car.model,
			'color' : car.Car.color,
			'plate' : car.Car.plate,
			'mileage' : car.Car.mileage,
			'fuelType' : car.Car.fuelType,
			'price' : car.Car.price,
			'year' : car.Car.year
		})
	for dealerships in session.query(Dealership).filter_by(ownerID = userId):
		owner_dealershipList.append({
			'id' : dealerships.id,
			'name' : dealerships.name
		})


	print 'owner dealerships'
	print owner_dealershipList

	return jsonify(all_cars = car_list,owner_dealerships = owner_dealershipList)
