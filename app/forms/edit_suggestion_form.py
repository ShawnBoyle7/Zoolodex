from flask_wtf import FlaskForm
from wtforms import StringField, RadioField
from wtforms.validators import DataRequired, Length

class EditSuggestionForm(FlaskForm):
    type = RadioField("type", choices=[("animal", "animal"), ("region", "region")], validators=[DataRequired()])
    title = StringField("title", validators=[DataRequired(), 
    Length(max=25, message="Title must 25 character or less"), Length(min=2, message="Title must be at least two characters")])

    description = StringField("description", validators=[DataRequired(), 
    Length(max=500, message="Description must 500 character or less"), Length(min=2, message="Description must be at least two characters")])