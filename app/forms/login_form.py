from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from .utils import user_exists, password_matches

class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), password_matches])
