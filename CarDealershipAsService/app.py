from flask import Flask
from routes.routes import app_pages
from api.register import register
from api.login import login
from api.userInfo import userInfo
from api.changeInfo import changeInfo
from api.createDealership import createDealership
from api.checkDealerships import checkDealerships
from api.createCar import createCar
from api.viewMyCars import viewMyCars
from api.showAllDealerships import showAllDealerships
from api.showOwnerDealerships import showOwnerDealerships
from api.allUsers import allUsers
from api.dealershipDetails import dealershipDetails
from api.changeDealershipInfo import changeDealershipInfo
from api.searchSomeCars import searchSomeCars
from api.updateCarState import updateCarState
from api.deleteCar import deleteCar

app = Flask(__name__,template_folder='template')


app.register_blueprint(app_pages)
app.register_blueprint(register)
app.register_blueprint(login)
app.register_blueprint(userInfo)
app.register_blueprint(changeInfo)
app.register_blueprint(createDealership)
app.register_blueprint(checkDealerships)
app.register_blueprint(createCar)
app.register_blueprint(viewMyCars)
app.register_blueprint(showAllDealerships)
app.register_blueprint(showOwnerDealerships)
app.register_blueprint(allUsers)
app.register_blueprint(dealershipDetails)
app.register_blueprint(changeDealershipInfo)
app.register_blueprint(searchSomeCars)
app.register_blueprint(updateCarState)
app.register_blueprint(deleteCar)