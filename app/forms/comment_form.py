from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class CommentForm(FlaskForm):
    content = StringField("content", validators=[DataRequired(),
    Length(max=1000, message="Comment must 1000 character or less"), Length(min=2, message="Comment must be at least two characters")])

    user_id = IntegerField("user_id", validators=[DataRequired()])
    animal_id = IntegerField("animal_id")
    sighting_id = IntegerField("sighting_id")