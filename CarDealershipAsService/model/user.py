from db import Base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from .dealership import Dealership
from .dealership import Car

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