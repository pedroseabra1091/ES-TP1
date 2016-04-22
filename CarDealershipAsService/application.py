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

application = Flask(__name__,template_folder='template')


application.register_blueprint(app_pages)
application.register_blueprint(register)
application.register_blueprint(login)
application.register_blueprint(userInfo)
application.register_blueprint(changeInfo)
application.register_blueprint(createDealership)
application.register_blueprint(checkDealerships)
application.register_blueprint(createCar)
application.register_blueprint(viewMyCars)
application.register_blueprint(showAllDealerships)
application.register_blueprint(showOwnerDealerships)
application.register_blueprint(allUsers)
application.register_blueprint(dealershipDetails)
application.register_blueprint(changeDealershipInfo)
application.register_blueprint(searchSomeCars)