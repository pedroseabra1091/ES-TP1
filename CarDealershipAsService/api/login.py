from flask import Flask,request,Blueprint,jsonify,render_template
from db import engine
from sqlalchemy.orm import sessionmaker
from model import Client

login = Blueprint('login',__name__)

@login.route('/api/v1/login',methods = ['GET','POST']) 
def whatever():
	if request.method == 'POST':

		Session = sessionmaker(bind=engine)
		session = Session()

		someEmail = request.json["email"]
		somePassword = request.json["password"]

		realUser = session.query(Client).filter_by(email = someEmail).first()
		#print email
		#print password
		if realUser == None:
			return jsonify({
				'loginState': 'unsuccessful',
				'erro': 'email nao encontrado'
			})

		if realUser.password != somePassword:#fazer query a db
			return jsonify({
				'loginState': 'unsuccessful',
				'erro': 'password invalida'
			})
			
		return jsonify({
			'loginState': 'successful',
			'erro': ''
			})

	return render_template('index.html')