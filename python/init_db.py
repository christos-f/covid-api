import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String, Date, ForeignKey, JSON
from sqlalchemy.orm import sessionmaker
from sqlalchemy.dialects import postgresql

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String, JSON
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import Query
from sqlalchemy.dialects import postgresql
import json

STATE_ID_LIST = [
  51, 22, 42, 40, 19, 54, 29, 4, 10, 35, 6, 50, 13, 2, 38, 47, 18, 27, 44, 11,
  9, 30, 21, 56, 34, 39, 41, 46, 53, 32, 12, 33, 23, 15, 48, 5, 31, 20, 1, 8,
  26, 72, 17, 37, 28, 45, 36, 16, 24, 25, 49, 55,
]

df = pd.read_csv("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv")

df.index.name = "id"
df = df.rename({'fips': 'state_id'}, axis='columns')
del df["state"]

DB_URI = "postgresql://postgres:christos@localhost/covid_db"
Base = declarative_base()
engine = create_engine(DB_URI)

Session = sessionmaker(bind=engine)
session = Session()

class State_case(Base):
    __tablename__ = "state_cases_table"
    
    id = Column(Integer, primary_key=True)
    date = Column(Date)
    state_id = Column(Integer, ForeignKey('state_table.id'))
    cases = Column(Integer)
    deaths = Column(Integer)

    
    def __repr__(self):
        return "<State_case(caseID='%s')>" % self.id

class State(Base):
    __tablename__ = "state_table"
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    geotype = Column(String)
    coordinates = Column(JSON)

    
    def __repr__(self):
        return "<State(name='%s')>" % self.name

Base.metadata.create_all(engine)

session.commit()

df = df[df['state_id'].isin(STATE_ID_LIST)]

df.to_sql("state_cases_table", engine, if_exists="append")

with open("states.json") as f:
    data = json.load(f)["features"]


for feature in data:
    state = State(id=feature["id"], 
                  name=feature["properties"]["name"], 
                  geotype=feature["geometry"]["type"], 
                  coordinates=feature["geometry"]["coordinates"])
    session.add(state)
session.commit()