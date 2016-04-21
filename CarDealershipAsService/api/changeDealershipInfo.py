from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client, Owner, Dealership

changeDealershipInfo = Blueprint('changeDealershipInfo',__name__)

@changeDealershipInfo.route('/api/v1/changeDealershipInfo',methods = ['POST']) 
def change_DealershipInfo():

	dealershipID = request.json['dealID']
	name = request.json['name']
	location = request.json['location']
	contact = request.json['contact']
	
	Session = sessionmaker(bind=engine)
	session = Session()

	dealership = session.query(Dealership).filter_by(id = dealershipID).first()
	if dealership == None:
		return jsonify({
			'message': 'shit happened'
		})
	dealership.name = name
	dealership.location = location
	dealership.contact = contact
	session.commit()
	return jsonify({
		'message' : 'change successful'
	})


