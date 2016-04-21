from db import Base
from itsdangerous import (TimedJSONWebSignatureSerializer as Serializer, BadSignature, SignatureExpired)
from passlib.apps import custom_app_context as pwd_context
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from .dealership import Dealership
from .car import Car


class Client(Base):

    __tablename__= 'client'

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email =Column(String(100), unique=True)
    password = Column(String(120), nullable=False)
    contact = Column(Integer)

    def hash_password(self, password):
        self.password = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password)
   
class Owner(Base):

    __tablename__ = 'owner'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password = Column(String(120), nullable=False)
    contact = Column(Integer, nullable=False)
    dealers = relationship('Dealership', backref='owner', lazy='dynamic')
    all_cars = relationship('Car',backref='owner',lazy='dynamic')

    def hash_password(self, password):
        self.password = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password)


