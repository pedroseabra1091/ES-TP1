from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Car

viewMyCars = Blueprint('viewMyCars',__name__)

@viewMyCars.route('/api/v1/viewMyCars',methods = ['POST']) 
def check_dealerships():

	userId = request.json['id']
	car_list = []
	
	Session = sessionmaker(bind=engine)
	session = Session()
	
	for car in session.query(Car).filter_by(ownerID = userId).all():
		car_list.append({'brand' : car.brand,'model' : car.model,'fuelType' : car.fuelType,'mileage' : car.mileage})
	
	return jsonify(data = car_list)
