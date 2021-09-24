from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    content = StringField("content", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    animal_id = IntegerField("animal_id")
    sighting_id = IntegerField("sighting_id")