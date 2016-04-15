from flask import Flask
from routes.routes import app_pages
from api.register import register
from api.login import login
from api.userInfo import userInfo


app = Flask(__name__,template_folder='template')


app.register_blueprint(app_pages)
app.register_blueprint(register)
app.register_blueprint(login)
app.register_blueprint(userInfo)
