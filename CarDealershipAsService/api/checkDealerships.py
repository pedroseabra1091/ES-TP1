from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Dealership

checkDealerships = Blueprint('checkDealerships',__name__)

@checkDealerships.route('/api/v1/checkDealerships',methods = ['POST']) 
def check_dealerships():

	userId = request.json['id']
	dealership_list = []
	
	Session = sessionmaker(bind=engine)
	session = Session()
	
	for dealership in session.query(Dealership).filter_by(ownerID = userId).all():
		dealership_list.append({'id' : dealership.id, 'name' : dealership.name})
	
	return jsonify(data = dealership_list)
