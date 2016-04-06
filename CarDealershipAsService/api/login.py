from flask import Flask,request,Blueprint,jsonify,render_template

login = Blueprint('login',__name__)

@login.route('/api/v1/login',methods = ['GET','POST']) 
def isRunning():
	if request.method == 'POST':
		email = request.json["email"]
		password = request.json["password"]
		#print email
		#print password
		if email != 'joao' or password != 'abc':#fazer query a db
			return jsonify({
				'loginState': 'unsuccessful',
				'erro': 'email/password invalid'
				})
		return jsonify({
			'loginState': 'successful',
			'erro': ''
			})

	return render_template('index.html')