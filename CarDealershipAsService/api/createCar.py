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
	image = request.json['image']

   	s3 = boto.connect_s3()

   	bucket_name = 'carimagebucket'
    	bucket = s3.get_bucket(bucket_name)
    	k = Key(bucket)

    	file_contents = image.read()

   	k.key = image.filename
    	print "Uploading some data to " + bucket_name + " with key: " + k.key
    	k.set_contents_from_string(file_contents)

	
	Session = sessionmaker(bind=engine)
	session = Session()
	
	dealership = session.query(Dealership).filter_by(id = idDealership,ownerID = userId).first()
	car = Car(ownerID = userId,brand = request.json['brand'],carImage = request.json['image'], model = request.json['model'], color = request.json['color'] , plate = request.json['plate'], mileage = request.json['mileage'], fuelType = request.json['fuelType'],year = request.json['year'],price = request.json['price'])
	dealership.cars.append(car)
	session.add(car)
	session.commit()

	return jsonify({'message' : 'New car inserted'})