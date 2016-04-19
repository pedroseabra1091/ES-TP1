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


	print "I'm here!!!"

	myList = []
	
	i=0

	for deals in session.query(Dealership.name,Dealership.location, Owner.name).filter(Dealership.ownerID==Owner.id).all():
		print deals
		print deals[0]
		print deals[1]
		myList.append( {'id':i , 'owner': deals[2], 'deal_name': deals[0], 'location' : deals[1]})
		i = i+1

	print myList

	return jsonify(ret = myList)