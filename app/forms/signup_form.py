from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email
from .utils import password_validation, user_exists_validation, username_exists_validation

class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), Email(), user_exists_validation()])
    username = StringField('username', validators=[DataRequired(), username_exists_validation()])
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired(), password_validation()])