from flask import Blueprint
from app.models import Animal

animals_routes = Blueprint('animals', __name__)

@animals_routes.route('/')
def animals():
    animals = Animal.query.all()
    return {'animals': [animal.to_dict() for animal in animals]}