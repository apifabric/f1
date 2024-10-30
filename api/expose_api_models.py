from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Car, method_decorators= method_decorators)
    api.expose_object(database.models.Team, method_decorators= method_decorators)
    api.expose_object(database.models.Circuit, method_decorators= method_decorators)
    api.expose_object(database.models.CircuitWeather, method_decorators= method_decorators)
    api.expose_object(database.models.Driver, method_decorators= method_decorators)
    api.expose_object(database.models.LapTime, method_decorators= method_decorators)
    api.expose_object(database.models.Race, method_decorators= method_decorators)
    api.expose_object(database.models.Penalty, method_decorators= method_decorators)
    api.expose_object(database.models.Qualification, method_decorators= method_decorators)
    api.expose_object(database.models.RaceResult, method_decorators= method_decorators)
    api.expose_object(database.models.Sponsor, method_decorators= method_decorators)
    api.expose_object(database.models.TeamSponsor, method_decorators= method_decorators)
    return api
