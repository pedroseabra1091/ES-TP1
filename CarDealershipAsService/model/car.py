from db import Base
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.schema import ForeignKey

class Car(Base): 

    __tablename__ = 'car'

    id = Column(Integer,primary_key=True)
    dealershipID = Column(Integer,ForeignKey('dealership.id'))
    ownerID = Column(Integer, ForeignKey('owner.id'))
    brand = Column(String(100), nullable = False)
    model = Column(String(100), nullable = False)
    color = Column(String(100), nullable=False)
    plate = Column(String(100), nullable = False,unique=True)
    mileage = Column(Integer, nullable=False)
    fuelType = Column(String(100), nullable=False)
    price = Column(Integer, nullable=False)
    year = Column(Integer, nullable=False)
