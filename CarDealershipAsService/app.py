from flask import Flask
from routes.routes import app_pages
from api.register import register
from api.login import login
from api.userInfo import userInfo
from api.changeInfo import changeInfo
from api.createDealership import createDealership
from api.checkDealerships import checkDealerships
from api.createCar import createCar


app = Flask(__name__,template_folder='template')


app.register_blueprint(app_pages)
app.register_blueprint(register)
app.register_blueprint(login)
app.register_blueprint(userInfo)
app.register_blueprint(changeInfo)
app.register_blueprint(createDealership)
app.register_blueprint(checkDealerships)
app.register_blueprint(createCar)
