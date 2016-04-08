from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import IntegrityError
from model import Client
from model import Owner

register = Blueprint('register',__name__)
@register.route('/api/v1/register',methods = ['POST'])
def create_user():

	typeUser = request.json['client']

	Session = sessionmaker(bind=engine)
	session = Session()

	if(typeUser == "true"):

		new_client = Client(name= request.json["name"],email=request.json["email"],password=request.json["password"],contact=request.json["contact"])

		try:	
			session.add(new_client)
			session.commit()
		except IntegrityError:
			return jsonify(result='That account already exists')

		return jsonify(result='successful insertion of a client')

	elif(typeUser == "false"):	

		new_owner = Owner(name= request.json["name"],email=request.json["email"],password=request.json["password"],contact=request.json["contact"])

		try:	
			session.add(new_owner)
			session.commit()
		except IntegrityError:
			return jsonify(result='That account already exists')

		return jsonify(result='successful insertion of a owner')

	else:
		return jsonify(result='You didnt choose a user type')
