from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length

class EditCommentForm(FlaskForm):
    content = StringField("content", validators=[DataRequired(), 
    Length(max=1000, message="Comment must 1000 character or less"), Length(min=2, message="Comment must be at least two characters")])