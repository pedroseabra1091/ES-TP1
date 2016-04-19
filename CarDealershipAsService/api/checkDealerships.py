from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Dealership

checkDealerships = Blueprint('checkDealerships',__name__)

@checkDealerships.route('/api/v1/checkDealerships',methods = ['POST']) 
def check_dealerships():

	userId = request.json['id']
	names = []
	
	Session = sessionmaker(bind=engine)
	session = Session()
	
	dealerships = session.query(Dealership).filter_by(ownerID = userId).all()
	names = [dealership.name for dealership in dealerships]
	return jsonify(names = names)
