from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client

register = Blueprint('register',__name__)
@register.route('/api/v1/register',methods = ['POST'])
def create_user():

	Session = sessionmaker(bind=engine)
	session = Session()

	new_client = Client(name= request.json["name"],email=request.json["email"],password=request.json["password"],contact=request.json["contact"])
	session.add(new_client)
	session.commit()

	return "Record inserted successfully"