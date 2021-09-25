from flask import Blueprint, request
from flask_login import login_required
from werkzeug.utils import secure_filename
from app.models import db, User
from app.forms import EditUserForm
from .utils import validation_errors_to_error_messages
from werkzeug.utils import secure_filename
from .aws_s3 import public_file_upload
import os

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.session_to_dict()


@user_routes.route('/<int:id>', methods=["PUT"])
def edit_user(id):
    form = EditUserForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        user = User.query.get(id)

        email=request.form["email"],
        username=request.form["username"],
        first_name=request.form["first_name"],
        last_name=request.form["last_name"],
        password=request.form["password"]

        img_file = None
        img_url = user.img_url
        
        if "img_file" in request.files:
            img_file = request.files["img_file"]

        if img_file:
            try:
                temp_file_name = "app/api/tmp" + secure_filename(img_file.filename)
                img_file.save(temp_file_name)
                img_url = public_file_upload(temp_file_name, "zoolodex-bucket")
                os.remove(temp_file_name)
            except KeyError:
                pass

        if email:
            user.email = email
        if username:
            user.username = username
        if first_name:
            user.first_name = first_name
        if last_name:
            user.last_name = last_name
        if password:
            user.password = password
        if img_url:
            user.img_url = img_url

        db.session.commit()

        return user.session_to_dict()
    
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401