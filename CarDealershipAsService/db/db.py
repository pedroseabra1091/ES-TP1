from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

databaseurl = 'mysql://root:Pergula2010@localhost/autotrader'

engine = create_engine(databaseurl)

Base = declarative_base()

def init_db():
	Base.metadata.create_all(engine)