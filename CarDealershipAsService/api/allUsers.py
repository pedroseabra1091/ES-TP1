from flask import Blueprint,jsonify,request,render_template
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client, Owner 

allUsers = Blueprint('allUsers',__name__)

@allUsers.route('/api/v1/allUsers',methods = ['POST']) 
def listUsers():
	
	Session = sessionmaker(bind=engine)
	session = Session()

	clientList = []

	allClients = session.query(Client.id, Client.name, Client.email).all()
	
	for line in allClients:
		clientList.append({'id':line.id, 'name':line.name, 'email':line.email})

	return jsonify(ret = clientList)


