from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import Suggestion

class SuggestionForm(FlaskForm):
    type = SelectField("type", choices=["animal", "region"])