from ..models import User
from wtforms.validators import ValidationError
import re

# Sign Up Validation

def password_validation(form, field):
        password = field.data
        errors = []

        length_regex = "^.{8,}$"
        length_matches = re.fullmatch(length_regex, password)

        uppercase_regex = "^.*[A-Z]+.*$"
        uppercase_matches = re.fullmatch(uppercase_regex, password)

        lowercase_regex = "^.*[a-z]+.*$"
        lowercase_matches = re.fullmatch(lowercase_regex, password)

        number_regex = "^.*\d+.*$"
        number_matches = re.fullmatch(number_regex, password)

        special_char_regex = "^.*[@$!%*?&]+.*$"
        special_char_matches = re.fullmatch(special_char_regex, password)

        if not length_matches and len(password):
            errors.append("Password must contain at least 8 or more characters.")

        if not uppercase_matches and len(password): 
            errors.append("Password must contain at least one uppercase letter.")

        if not lowercase_matches and len(password):
            errors.append("Password must contain at least one lowercase letter.")

        if not number_matches and len(password):
            errors.append("Password must contain at least one number")

        if not special_char_matches and len(password):
            errors.append("Password must contain at least one special character (@$!%*?&)")

        if len(errors):
            raise ValidationError(errors)

def username_exists_validation():
    def username_exists(form, field):
        user_id = 0
        if hasattr(form, "user_id"):
            user_id = form.user_id.data
        username = field.data
        user = User.query.filter(User.username == username).first()
        if user and user_id != user.id:
            raise ValidationError("Username is already in use.")
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
        raise ValidationError('Email address not found.')

def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('User does not exist')
    if not user.check_password(password):
        raise ValidationError('Incorrect password.')