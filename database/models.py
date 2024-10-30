# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 30, 2024 13:47:41
# Database: sqlite:////tmp/tmp.tpZHrs2KcE/f1/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Circuit(SAFRSBaseX, Base):
    """
    description: Table storing the details of racing circuits.
    """
    __tablename__ = 'circuit'
    _s_collection_name = 'Circuit'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    length_km = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CircuitWeatherList : Mapped[List["CircuitWeather"]] = relationship(back_populates="circuit")
    RaceList : Mapped[List["Race"]] = relationship(back_populates="circuit")



class Sponsor(SAFRSBaseX, Base):
    """
    description: Table storing information about sponsors.
    """
    __tablename__ = 'sponsor'
    _s_collection_name = 'Sponsor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    TeamSponsorList : Mapped[List["TeamSponsor"]] = relationship(back_populates="sponsor")



class Team(SAFRSBaseX, Base):
    """
    description: Table storing information about Formula 1 teams.
    """
    __tablename__ = 'team'
    _s_collection_name = 'Team'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    base_country = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CarList : Mapped[List["Car"]] = relationship(back_populates="team")
    DriverList : Mapped[List["Driver"]] = relationship(back_populates="team")
    TeamSponsorList : Mapped[List["TeamSponsor"]] = relationship(back_populates="team")



class Car(SAFRSBaseX, Base):
    """
    description: Table storing details of cars used by teams.
    """
    __tablename__ = 'car'
    _s_collection_name = 'Car'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    team_id = Column(ForeignKey('team.id'), nullable=False)
    model = Column(String, nullable=False)
    engine_supplier = Column(String)

    # parent relationships (access parent)
    team : Mapped["Team"] = relationship(back_populates=("CarList"))

    # child relationships (access children)



class CircuitWeather(SAFRSBaseX, Base):
    """
    description: Table storing weather conditions for each circuit on race day.
    """
    __tablename__ = 'circuit_weather'
    _s_collection_name = 'CircuitWeather'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    circuit_id = Column(ForeignKey('circuit.id'), nullable=False)
    race_day = Column(DateTime, nullable=False)
    weather_condition = Column(String)

    # parent relationships (access parent)
    circuit : Mapped["Circuit"] = relationship(back_populates=("CircuitWeatherList"))

    # child relationships (access children)



class Driver(SAFRSBaseX, Base):
    """
    description: Table storing information about Formula 1 drivers.
    """
    __tablename__ = 'driver'
    _s_collection_name = 'Driver'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    nationality = Column(String)
    team_id = Column(ForeignKey('team.id'), nullable=False)

    # parent relationships (access parent)
    team : Mapped["Team"] = relationship(back_populates=("DriverList"))

    # child relationships (access children)
    LapTimeList : Mapped[List["LapTime"]] = relationship(back_populates="driver")
    PenaltyList : Mapped[List["Penalty"]] = relationship(back_populates="driver")
    QualificationList : Mapped[List["Qualification"]] = relationship(back_populates="driver")
    RaceResultList : Mapped[List["RaceResult"]] = relationship(back_populates="driver")



class Race(SAFRSBaseX, Base):
    """
    description: Table storing the schedule and details of each race.
    """
    __tablename__ = 'race'
    _s_collection_name = 'Race'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    circuit_id = Column(ForeignKey('circuit.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    laps = Column(Integer, nullable=False)

    # parent relationships (access parent)
    circuit : Mapped["Circuit"] = relationship(back_populates=("RaceList"))

    # child relationships (access children)
    LapTimeList : Mapped[List["LapTime"]] = relationship(back_populates="race")
    PenaltyList : Mapped[List["Penalty"]] = relationship(back_populates="race")
    QualificationList : Mapped[List["Qualification"]] = relationship(back_populates="race")
    RaceResultList : Mapped[List["RaceResult"]] = relationship(back_populates="race")



class TeamSponsor(SAFRSBaseX, Base):
    """
    description: Link table between Team and Sponsor, showing sponsorship relationships.
    """
    __tablename__ = 'team_sponsor'
    _s_collection_name = 'TeamSponsor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    team_id = Column(ForeignKey('team.id'), nullable=False)
    sponsor_id = Column(ForeignKey('sponsor.id'), nullable=False)

    # parent relationships (access parent)
    sponsor : Mapped["Sponsor"] = relationship(back_populates=("TeamSponsorList"))
    team : Mapped["Team"] = relationship(back_populates=("TeamSponsorList"))

    # child relationships (access children)



class LapTime(SAFRSBaseX, Base):
    """
    description: Table storing lap times for each driver during a race.
    """
    __tablename__ = 'lap_time'
    _s_collection_name = 'LapTime'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    race_id = Column(ForeignKey('race.id'), nullable=False)
    driver_id = Column(ForeignKey('driver.id'), nullable=False)
    lap_number = Column(Integer, nullable=False)
    time_seconds = Column(Float, nullable=False)

    # parent relationships (access parent)
    driver : Mapped["Driver"] = relationship(back_populates=("LapTimeList"))
    race : Mapped["Race"] = relationship(back_populates=("LapTimeList"))

    # child relationships (access children)



class Penalty(SAFRSBaseX, Base):
    """
    description: Table storing penalties received by drivers during a race.
    """
    __tablename__ = 'penalty'
    _s_collection_name = 'Penalty'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    race_id = Column(ForeignKey('race.id'), nullable=False)
    driver_id = Column(ForeignKey('driver.id'), nullable=False)
    penalty_type = Column(String, nullable=False)
    penalty_seconds = Column(Float, nullable=False)

    # parent relationships (access parent)
    driver : Mapped["Driver"] = relationship(back_populates=("PenaltyList"))
    race : Mapped["Race"] = relationship(back_populates=("PenaltyList"))

    # child relationships (access children)



class Qualification(SAFRSBaseX, Base):
    """
    description: Table storing qualification session results for each race.
    """
    __tablename__ = 'qualification'
    _s_collection_name = 'Qualification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    race_id = Column(ForeignKey('race.id'), nullable=False)
    driver_id = Column(ForeignKey('driver.id'), nullable=False)
    position = Column(Integer, nullable=False)

    # parent relationships (access parent)
    driver : Mapped["Driver"] = relationship(back_populates=("QualificationList"))
    race : Mapped["Race"] = relationship(back_populates=("QualificationList"))

    # child relationships (access children)



class RaceResult(SAFRSBaseX, Base):
    """
    description: Table storing results of each race.
    """
    __tablename__ = 'race_result'
    _s_collection_name = 'RaceResult'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    race_id = Column(ForeignKey('race.id'), nullable=False)
    driver_id = Column(ForeignKey('driver.id'), nullable=False)
    position = Column(Integer, nullable=False)
    points = Column(Integer, nullable=False)

    # parent relationships (access parent)
    driver : Mapped["Driver"] = relationship(back_populates=("RaceResultList"))
    race : Mapped["Race"] = relationship(back_populates=("RaceResultList"))

    # child relationships (access children)
