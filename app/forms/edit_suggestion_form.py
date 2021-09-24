from flask_wtf import FlaskForm
from wtforms import StringField, RadioField
from wtforms.validators import DataRequired

class EditSuggestionForm(FlaskForm):
    type = RadioField("type", choices=[("animal", "animal"), ("region", "region")], validators=[DataRequired()])
    title = StringField("title", validators=[DataRequired()])
    description = StringField("description", validators=[DataRequired()])