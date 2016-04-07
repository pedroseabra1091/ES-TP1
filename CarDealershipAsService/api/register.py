from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import IntegrityError
from model import Client

register = Blueprint('register',__name__)
@register.route('/api/v1/register',methods = ['POST'])
def create_user():

	Session = sessionmaker(bind=engine)
	session = Session()

	new_client = Client(name= request.json["name"],email=request.json["email"],password=request.json["password"],contact=request.json["contact"])
<<<<<<< HEAD
	try:	
		session.add(new_client)
		session.commit()
	except IntegrityError:
		return jsonify(result='IntegrityError failure')

	return jsonify(result='success')
=======
	session.add(new_client)
	session.commit()

	return "Success"
>>>>>>> Login
