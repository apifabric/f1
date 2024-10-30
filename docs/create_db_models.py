# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.sql import func
import datetime

Base = declarative_base()

class Team(Base):
    """description: Table storing information about Formula 1 teams."""
    __tablename__ = 'team'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    base_country = Column(String, nullable=True)

class Circuit(Base):
    """description: Table storing the details of racing circuits."""
    __tablename__ = 'circuit'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    length_km = Column(Float, nullable=False)  # Length of the circuit in kilometers

class Race(Base):
    """description: Table storing the schedule and details of each race."""
    __tablename__ = 'race'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    circuit_id = Column(Integer, ForeignKey('circuit.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    laps = Column(Integer, nullable=False)

class Driver(Base):
    """description: Table storing information about Formula 1 drivers."""
    __tablename__ = 'driver'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    nationality = Column(String, nullable=True)
    team_id = Column(Integer, ForeignKey('team.id'), nullable=False)

class Qualification(Base):
    """description: Table storing qualification session results for each race."""
    __tablename__ = 'qualification'
    id = Column(Integer, primary_key=True, autoincrement=True)
    race_id = Column(Integer, ForeignKey('race.id'), nullable=False)
    driver_id = Column(Integer, ForeignKey('driver.id'), nullable=False)
    position = Column(Integer, nullable=False)

class RaceResult(Base):
    """description: Table storing results of each race."""
    __tablename__ = 'race_result'
    id = Column(Integer, primary_key=True, autoincrement=True)
    race_id = Column(Integer, ForeignKey('race.id'), nullable=False)
    driver_id = Column(Integer, ForeignKey('driver.id'), nullable=False)
    position = Column(Integer, nullable=False)
    points = Column(Integer, nullable=False)

class Car(Base):
    """description: Table storing details of cars used by teams."""
    __tablename__ = 'car'
    id = Column(Integer, primary_key=True, autoincrement=True)
    team_id = Column(Integer, ForeignKey('team.id'), nullable=False)
    model = Column(String, nullable=False)
    engine_supplier = Column(String, nullable=True)

class Sponsor(Base):
    """description: Table storing information about sponsors."""
    __tablename__ = 'sponsor'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class TeamSponsor(Base):
    """description: Link table between Team and Sponsor, showing sponsorship relationships."""
    __tablename__ = 'team_sponsor'
    id = Column(Integer, primary_key=True, autoincrement=True)
    team_id = Column(Integer, ForeignKey('team.id'), nullable=False)
    sponsor_id = Column(Integer, ForeignKey('sponsor.id'), nullable=False)

class CircuitWeather(Base):
    """description: Table storing weather conditions for each circuit on race day."""
    __tablename__ = 'circuit_weather'
    id = Column(Integer, primary_key=True, autoincrement=True)
    circuit_id = Column(Integer, ForeignKey('circuit.id'), nullable=False)
    race_day = Column(DateTime, nullable=False)
    weather_condition = Column(String, nullable=True)

class LapTime(Base):
    """description: Table storing lap times for each driver during a race."""
    __tablename__ = 'lap_time'
    id = Column(Integer, primary_key=True, autoincrement=True)
    race_id = Column(Integer, ForeignKey('race.id'), nullable=False)
    driver_id = Column(Integer, ForeignKey('driver.id'), nullable=False)
    lap_number = Column(Integer, nullable=False)
    time_seconds = Column(Float, nullable=False)

class Penalty(Base):
    """description: Table storing penalties received by drivers during a race."""
    __tablename__ = 'penalty'
    id = Column(Integer, primary_key=True, autoincrement=True)
    race_id = Column(Integer, ForeignKey('race.id'), nullable=False)
    driver_id = Column(Integer, ForeignKey('driver.id'), nullable=False)
    penalty_type = Column(String, nullable=False)
    penalty_seconds = Column(Float, nullable=False)

# Create the SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
teams = [
    Team(name="Mercedes", base_country="Germany"),
    Team(name="Red Bull Racing", base_country="Austria"),
    Team(name="Ferrari", base_country="Italy"),
    Team(name="McLaren", base_country="UK"),
]

circuits = [
    Circuit(name="Monza", location="Italy", length_km=5.793),
    Circuit(name="Silverstone", location="UK", length_km=5.891),
    Circuit(name="Spa-Francorchamps", location="Belgium", length_km=7.004),
]

races = [
    Race(name="Italian Grand Prix", circuit_id=1, date=datetime.datetime(2024, 9, 9), laps=53),
    Race(name="British Grand Prix", circuit_id=2, date=datetime.datetime(2024, 7, 14), laps=52),
]

drivers = [
    Driver(name="Lewis Hamilton", nationality="British", team_id=1),
    Driver(name="Max Verstappen", nationality="Dutch", team_id=2),
    Driver(name="Charles Leclerc", nationality="Monégasque", team_id=3),
    Driver(name="Lando Norris", nationality="British", team_id=4),
]

qualifications = [
    Qualification(race_id=1, driver_id=1, position=1),
    Qualification(race_id=1, driver_id=2, position=2),
    Qualification(race_id=2, driver_id=4, position=1),
]

race_results = [
    RaceResult(race_id=1, driver_id=2, position=1, points=25),
    RaceResult(race_id=1, driver_id=1, position=2, points=18),
]

cars = [
    Car(team_id=1, model="W12", engine_supplier="Mercedes"),
    Car(team_id=2, model="RB16B", engine_supplier="Honda"),
]

sponsors = [
    Sponsor(name="Petronas"),
    Sponsor(name="Red Bull"),
    Sponsor(name="Shell"),
]

team_sponsors = [
    TeamSponsor(team_id=1, sponsor_id=1),
    TeamSponsor(team_id=2, sponsor_id=2),
]

circuit_weather = [
    CircuitWeather(circuit_id=1, race_day=datetime.datetime(2024, 9, 9), weather_condition="Sunny"),
    CircuitWeather(circuit_id=2, race_day=datetime.datetime(2024, 7, 14), weather_condition="Cloudy"),
]

lap_times = [
    LapTime(race_id=1, driver_id=1, lap_number=1, time_seconds=80.5),
    LapTime(race_id=1, driver_id=2, lap_number=1, time_seconds=79.3),
]

penalties = [
    Penalty(race_id=1, driver_id=3, penalty_type="Speeding in Pit Lane", penalty_seconds=5.0),
]

# Add all to the session and commit
session.add_all(teams + circuits + races + drivers + qualifications +
                race_results + cars + sponsors + team_sponsors +
                circuit_weather + lap_times + penalties)
session.commit()
