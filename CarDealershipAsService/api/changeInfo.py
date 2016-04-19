from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client, Owner

changeInfo = Blueprint('changeInfo',__name__)

@changeInfo.route('/api/v1/changeInfo',methods = ['POST']) 
def change_Info():

	typeUser = request.json['user']
	userId = request.json['id']
	name = request.json['name']
	email = request.json['email']
	password = request.json['password']
	contact = request.json['contact']
	
	Session = sessionmaker(bind=engine)
	session = Session()

	if(typeUser == 'client'):

		client = session.query(Client).filter_by(id = userId).first()
		client.name = name
		client.email = email
		client.password = password
		client.contact = contact
		session.commit()
		return jsonify({
			'message' : 'change successful'
		})

	if(typeUser == 'owner'):
		owner = session.query(Owner).filter_by(id = userId).first()
		owner.name = name
		owner.email = email
		owner.password = password
		owner.contact = contact
		session.commit()
		return jsonify({
			'message' : 'The change was successful'
		})

