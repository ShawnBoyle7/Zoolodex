from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, RadioField
from wtforms.validators import DataRequired

class SuggestionForm(FlaskForm):
    type = RadioField("type", choices=[("animal", "animal"), ("region", "region")], validators=[DataRequired()])
    title = StringField("title", validators=[DataRequired()])
    description = StringField("description", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])