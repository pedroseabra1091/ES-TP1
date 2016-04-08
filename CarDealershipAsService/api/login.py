from flask import Flask,request,Blueprint,jsonify,render_template
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client
from model import Owner

login = Blueprint('login',__name__)

@login.route('/api/v1/login',methods = ['GET','POST']) 
def user_login():

	if request.method == 'POST':

		typeUser = request.json['client']
		requested_email = request.json["email"]
		requested_password = request.json["password"]

		Session = sessionmaker(bind=engine)
		session = Session()

		if(typeUser == "true"):

			client = session.query(Client).filter_by(email = requested_email).first()
			
			if client == None:
				return jsonify(result='Email not found')

			elif client.password != requested_password:
				return jsonify(result='Invalid password')
			
			else:	
				return jsonify(result='success')

		elif(typeUser == "false"):

			owner = session.query(Owner).filter_by(email = requested_email).first()
			
			if owner == None:
				return jsonify(result='Email not found')

			elif owner.password != requested_password:
				return jsonify(result='Invalid password')
			
			else: 		
				return jsonify(result='success')	
		else:
			return jsonify(result='You didnt choose a user type')
	else:
		return render_template('index.html')