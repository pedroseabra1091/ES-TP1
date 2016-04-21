from flask import Blueprint,jsonify,request,render_template
from flask_security import auth_token_required
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client, Owner 

userInfo = Blueprint('userInfo',__name__)

@userInfo.route('/api/v1/userInfo',methods = ['POST']) 
@auth_token_required
def getInfo():

	typeUser = request.json['user']
	userId = request.json['id']
	
	Session = sessionmaker(bind=engine)
	session = Session()

	if(typeUser == 'client'):

		client = session.query(Client).filter_by(id = userId).first()
		
		return jsonify({

			'name': client.name,
			'contact' : client.contact,
			'email' : client.email,
			'password' : client.password

		})

	elif(typeUser == 'owner'):

		owner = session.query(Owner).filter_by(id = userId).first()

		return jsonify({
			'name' : owner.name,
			'contact' : owner.contact,
			'email' : owner.email,
			'password' : owner.password
		})

	else:
		return jsonify({'message':'User type not detected'})

