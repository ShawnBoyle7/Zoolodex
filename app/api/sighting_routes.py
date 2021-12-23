from flask import Blueprint
from app.models import Sighting
from app.forms import sighting_form

sighting_routes = Blueprint('sightings', __name__)

@sighting_routes.route('/')
def sightings():
    sightings = Sighting.query.all()
    # Why
    return {'sightings': [sighting.to_dict() for sighting in sightings]}

@sighting_routes.route('/', methods=["POST"])
def create_sighting():

    form = SightingForm()

    