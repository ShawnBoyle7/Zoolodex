from flask import Blueprint
from app.models import Animal

animal_routes = Blueprint('animals', __name__)

@animal_routes.route('/')
def animals():
    animals = Animal.query.all()
    # Why
    return {'animals': [animal.to_dict() for animal in animals]}