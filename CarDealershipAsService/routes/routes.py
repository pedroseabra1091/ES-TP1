from flask import render_template, Blueprint

app_pages = Blueprint('app_pages',__name__)

@app_pages.route('/')
def index():
	return render_template('index.html')