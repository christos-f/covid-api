from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String, JSON, Date

Base = declarative_base()

class State(Base):
    __tablename__ = "state-*_table"
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    geotype = Column(String)
    coordinates = Column(JSON)

    
    def __repr__(self):
        return "<State(name='%s')>" % self.name

class State_case(Base):
    __tablename__ = "state_cases_table"
    
    id = Column(Integer, primary_key=True)
    date = Column(Date)
    state_name = Column(String)
    stateID = Column(Integer)
    cases = Column(Integer)
    deaths = Column(Integer)

    
    def __repr__(self):
        return "<State_case(caseID='%s')>" % self.caseID