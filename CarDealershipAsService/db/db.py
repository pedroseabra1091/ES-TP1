from sqlalchemy import create_engine
databaseurl = 'mysql://root:ameiro13@localhost/autotrader'

engine = create_engine(databaseurl)
Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)