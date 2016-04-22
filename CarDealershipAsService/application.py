from app import app 
from db import init_db

application = app


if __name__ == '__main__':
	init_db()
	application.run(debug = True, host='0.0.0.0')