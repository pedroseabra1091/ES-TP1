from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Dealership

deleteDealership = Blueprint('deleteDealership',__name__)

@deleteDealership.route('/api/v1/deleteDealership',methods = ['POST']) 
def delete_dealership():

	dealershipID = request.json['id']
	
	Session = sessionmaker(bind=engine)
	session = Session()

	Dealership.query.filter(id=int(dealershipID)).delete()
	
	session.commit()

	return jsonify({'message' : 'Dealership deleted'})