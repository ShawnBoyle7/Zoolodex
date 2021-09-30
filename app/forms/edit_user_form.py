from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email
from .utils import user_exists_validation, username_exists_validation, password_validation

class EditUserForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), Email(), user_exists_validation()])
    username = StringField('username', validators=[DataRequired(), username_exists_validation()])
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    password = StringField('password', validators=[password_validation()])
    user_id = IntegerField('user_id')