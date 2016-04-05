from flask import Flask,request,Blueprint,jsonify

register = Blueprint('register',__name__)
@register.route('/api/v1/register',methods = ['POST'])
def isRunning():
	process_name = request.json["name"]
	process_email = request.json["email"]
	process_password = request.json["password"]
	process_contact = request.json["contact"]

	print (process_name)
	print (process_email)
	print (process_password)
	print (process_contact)

	return jsonify({
		'cawdaweawe': 123
	})