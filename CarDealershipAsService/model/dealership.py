from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.orm import relationship

Base = declarative_base()

class Dealership(Base):

    __tablename__ = 'dealership'

    id = Column(Integer, primary_key=True)
    ownerID = Column(Integer, ForeignKey('owner.id'))
    name = Column(String(100),nullable=False)
    contact = Column(Integer,nullable=False)
    location = Column(String(100), nullable=False)
    cars = relationship('Car',backref='dealership', lazy='dynamic')
