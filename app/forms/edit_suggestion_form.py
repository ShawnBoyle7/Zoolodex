from flask_wtf import FlaskForm
from wtforms import StringField, RadioField
from wtforms.validators import DataRequired, Length

class EditSuggestionForm(FlaskForm):
    type = RadioField("type", choices=[("animal", "animal"), ("region", "region")], validators=[DataRequired()])
    title = StringField("title", validators=[DataRequired(), Length(min=1, max=25, message="Title must 25 character or less")])
    description = StringField("description", validators=[DataRequired(), Length(min=2, max=500, message="Description must 500 character or less")])