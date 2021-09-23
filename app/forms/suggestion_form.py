from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired

class SuggestionForm(FlaskForm):
    type = SelectField("type", choices=["animal", "region"], validators=[DataRequired()])
    title = StringField("title", validators=[DataRequired()])
    description = StringField("description", validators=[DataRequired()])
    img_url = StringField("img_url", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])