from flask import Blueprint
from app.models import Suggestion

suggestion_routes = Blueprint("suggestions", __name__)

@suggestion_routes.route('/')
def suggestions():
    suggestions = Suggestion.query.all()

    return {"suggestions": [suggestion.to_dict() for suggestion in suggestions]}