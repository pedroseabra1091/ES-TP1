from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Dealership, Owner

showAllDealerships = Blueprint('showAllDealerships',__name__)

@showAllDealerships.route('/api/v1/showAllDealerships',methods = ['POST']) 
def listDealerships():

	#userId = request.json['id']

	Session = sessionmaker(bind=engine)
	session = Session()


	myList = []


	for deals in session.query(Dealership.id, Dealership.name,Dealership.location, Owner.name).filter(Dealership.ownerID==Owner.id).all():
		#print deals
		myList.append( {'id':deals[0] , 'deal_name': deals[1], 'location' : deals[2], 'owner': deals[3]})

	print myList

	return jsonify(ret = myList)