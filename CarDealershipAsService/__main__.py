from app import app 
from db import init_db

init_db()
app.run(debug = True)