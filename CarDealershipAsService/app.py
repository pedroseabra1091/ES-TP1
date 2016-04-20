from flask import Flask
from routes.routes import app_pages
from api.register import register
from api.login import login
from api.userInfo import userInfo
from api.changeInfo import changeInfo
from api.createDealership import createDealership
<<<<<<< HEAD
from api.checkDealerships import checkDealerships
from api.createCar import createCar
from api.viewMyCars import viewMyCars
=======
from api.showAllDealerships import showAllDealerships
from api.showOwnerDealerships import showOwnerDealerships
from api.allUsers import allUsers
>>>>>>> 2ee70f2a34c44e85ae3a819d7e737fbb3ebfec9f


app = Flask(__name__,template_folder='template')


app.register_blueprint(app_pages)
app.register_blueprint(register)
app.register_blueprint(login)
app.register_blueprint(userInfo)
app.register_blueprint(changeInfo)
app.register_blueprint(createDealership)
<<<<<<< HEAD
app.register_blueprint(checkDealerships)
app.register_blueprint(createCar)
app.register_blueprint(viewMyCars)
=======
app.register_blueprint(showAllDealerships)
app.register_blueprint(showOwnerDealerships)
app.register_blueprint(allUsers)
>>>>>>> 2ee70f2a34c44e85ae3a819d7e737fbb3ebfec9f
