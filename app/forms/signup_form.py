from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, equal_to, Length
from .utils import password_validation, user_exists_validation, username_exists_validation

class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), Email(), user_exists_validation()])
    username = StringField('username', validators=[DataRequired(), username_exists_validation(), 
    Length(max=25, message="Username must 25 character or less"), Length(min=2, message="Username must be at least two characters")])

    first_name = StringField('first_name', validators=[DataRequired(), 
    Length(max=25, message="First Name must 25 character or less"), Length(min=2, message="First Name must be at least two characters")])

    last_name = StringField('last_name', validators=[DataRequired(), 
    Length(max=25, message="Last Name must 25 character or less"), Length(min=2, message="Last Name must be at least two characters")])
    
    password = StringField('password', validators=[DataRequired(), password_validation, equal_to('repeat_password', message="Passwords must match")])
    
    repeat_password = StringField('repeat_password', validators=[DataRequired()])