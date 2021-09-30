from ..models import User
from wtforms.validators import ValidationError
import re

# Sign Up Validation

def password_validation():
    def check_password(form, field):
        regexValidator = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        password = field.data
        matches = re.fullmatch(regexValidator, password)
        if not matches and len(password):
            raise ValidationError("Password must contain at least 8 or more characters, at least one number, one uppercase letter, one lowercase letter, and one special character: @$!%*?&")
    return check_password

def username_exists_validation():
    def username_exists(form, field):
        user_id = 0
        if hasattr(form, "user_id"):
            user_id = form.user_id.data
        username = field.data
        user = User.query.filter(User.username == username).first()
        if user and user_id != user.id:
            raise ValidationError("Username is in use.")
    return username_exists

def user_exists_validation():
    def user_exists(form, field):
        user_id = 0
        if hasattr(form, "user_id"):
            user_id = form.user_id.data
        email = field.data
        user = User.query.filter(User.email == email).first()
        if user and user_id != user.id:
            raise ValidationError("Email address is in use.")
    return user_exists

# Login Validation

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email address provided was not found.')

def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('User does not exist')
    if not user.check_password(password):
        raise ValidationError('Incorrect password.')