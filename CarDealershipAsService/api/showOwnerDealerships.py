from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Dealership, Owner

showOwnerDealerships = Blueprint('showOwnerDealerships',__name__)

@showOwnerDealerships.route('/api/v1/showOwnerDealerships',methods = ['POST']) 
def listOwnerDealerships():

	Session = sessionmaker(bind=engine)
	session = Session()

	myOwnerID = request.json["id"]

	myList = []


	for deals in session.query(Dealership.id, Dealership.name,Dealership.location).filter(Dealership.ownerID==myOwnerID).order_by(Dealership.name).all():
		#print deals
		myList.append( {'id':deals[0] , 'deal_name': deals[1], 'location' : deals[2]})

	print myList

	return jsonify(ret = myList)