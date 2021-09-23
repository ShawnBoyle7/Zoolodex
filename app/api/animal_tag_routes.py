from flask import Blueprint
from app.models import AnimalTag

animal_tag_routes = Blueprint("animal_tags", __name__)

@animal_tag_routes.route('/')
def animal_tags():
    animal_tags = AnimalTag.query.all()

    return {"animal_tags": [animal_tag.to_dict() for animal_tag in animal_tags]}
