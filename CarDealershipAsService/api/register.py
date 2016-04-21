from flask import Flask,request,Blueprint,jsonify,render_template
from db import engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import IntegrityError
from model import Client
from model import Owner

register = Blueprint('register',__name__)
@register.route('/api/v1/register',methods = ['POST'])
def create_user():

	typeUser = request.json['user']

	Session = sessionmaker(bind=engine)
	session = Session()

	if(typeUser == "client"):

		new_client = Client(name= request.json["name"],email=request.json["email"],contact=request.json["contact"])
		new_client.hash_password(request.json["password"])
		try:
			session.add(new_client)
			session.commit()
		except IntegrityError:
			return jsonify({'message':'That account already exists'})

		return jsonify({'message':'successful insertion of a client'})

	elif(typeUser == "owner"):	

		new_owner = Owner(name= request.json["name"],email=request.json["email"],contact=request.json["contact"])
		new_owner.hash_password(request.json["password"])
		try:	
			session.add(new_owner)
			session.commit()
		except IntegrityError:
			return jsonify({'message':'That account already exists'})

		return jsonify({'message':'successful insertion of a owner'})

	else:
		return jsonify({'message':'You didnt choose a user type'})
