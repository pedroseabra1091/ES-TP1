from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Dealership, Owner

createDealership = Blueprint('createDealership',__name__)

@createDealership.route('/api/v1/createDealership',methods = ['POST']) 
def create_Dealership():

	userId = request.json['id']

	Session = sessionmaker(bind=engine)
	session = Session()
	
	owner = session.query(Owner).filter_by(id = userId).first()
	dealership = Dealership(name = request.json['name'],contact = request.json['contact'],location = request.json['location'])
	
	owner.dealers.append(dealership)
	session.add(dealership)
	session.commit()

	return jsonify({'message' : 'Dealership created'})