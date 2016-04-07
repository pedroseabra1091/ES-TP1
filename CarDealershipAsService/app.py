from flask import Flask
from routes.routes import app_pages
from api.register import register
from api.login import login


app = Flask(__name__,template_folder='template')


app.register_blueprint(app_pages)
app.register_blueprint(register)
app.register_blueprint(login)