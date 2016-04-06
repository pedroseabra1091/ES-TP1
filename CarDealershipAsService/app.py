from flask import Flask
from routes.routes import app_pages
from api.register import register


app = Flask(__name__,template_folder='template')


app.register_blueprint(app_pages)
app.register_blueprint(register)