from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Car, Dealership

deleteCar = Blueprint('deleteCar',__name__)

@deleteCar.route('/api/v1/deleteCar',methods = ['POST']) 
def delete_Car():

	carID = request.json['id']
	
	Session = sessionmaker(bind=engine)
	session = Session()

	Car.query.filter(id=int(carID)).delete()
	
	session.commit()

	return jsonify({'message' : 'Car deleted'})