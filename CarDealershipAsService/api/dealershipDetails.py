from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Dealership, Owner

dealershipDetails = Blueprint('dealershipDetails',__name__)

@dealershipDetails.route('/api/v1/dealershipDetails',methods = ['POST']) 
def showDealershipSummary():

	Session = sessionmaker(bind=engine)
	session = Session()

	dealershipID = request.json['dealID']

	deal = session.query(Dealership.id, Dealership.name,Dealership.location, Dealership.contact, Owner.name).filter(Dealership.ownerID==Owner.id).filter(Dealership.id == dealershipID).first()

	print deal

	return jsonify({'name':deal[1], 'location':deal[2], 'contact' : deal[3] , 'owner':deal[4]})