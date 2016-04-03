from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Client(Base):

    __tablename__= 'client'

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email =Column(String(100), unique=True)
    password = Column(String(100), nullable=False)
    contact = Column(Integer)

class Owner(Base):

    __tablename__ = 'owner'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password = Column(String(100), nullable=False)
    contact = Column(Integer, nullable=False)
    dealers = relationship('Dealership', backref='owner', lazy='dynamic')
    all_cars = relationship('Car',backref='owner',lazy='dynamic')