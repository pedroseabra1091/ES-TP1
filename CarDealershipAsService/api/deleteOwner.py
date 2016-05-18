from flask import Flask,request,Blueprint,jsonify
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Owner

deleteOwner = Blueprint('deleteOwner',__name__)

@deleteOwner.route('/api/v1/deleteOwner',methods = ['POST']) 
def delete_user():

	ownerID = request.json['id']
	
	Session = sessionmaker(bind=engine)
	session = Session()

	session.query(Owner).filter_by(id = ownerID).delete()
	
	session.commit()

	return jsonify({'message' : 'Owner deleted'})