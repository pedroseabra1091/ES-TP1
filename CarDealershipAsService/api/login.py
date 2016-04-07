from flask import Flask,request,Blueprint,jsonify,render_template
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client

login = Blueprint('login',__name__)

@login.route('/api/v1/login',methods = ['GET','POST']) 
def user_login():
	if request.method == 'POST':

		Session = sessionmaker(bind=engine)
		session = Session()

		requested_email = request.json["email"]
		requested_password = request.json["password"]

		User = session.query(Client).filter_by(email = requested_email).first()
		
		if User == None:
			return jsonify({
				'loginState': 'unsuccessful',
				'erro': 'email not found'
			})

		if User.password != requested_password:
			return jsonify({
				'loginState': 'unsuccessful',
				'erro': 'invalid password'
			})
			
		return jsonify({
			'loginState': 'successful',
			'erro': ''
			})

	return render_template('index.html')