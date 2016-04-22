from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client

deleteUser = Blueprint('deleteUser',__name__)

@deleteUser.route('/api/v1/deleteUser',methods = ['POST']) 
def delete_user():

	userID = request.json['id']
	
	Session = sessionmaker(bind=engine)
	session = Session()

	session.query(Client).filter_by(id = userID).delete()

	#client = session.query(Client).filter_by(id = userId).delete()
	
	session.commit()

	return jsonify({'message' : 'User deleted'})