from app.forms.edit_suggestion_form import EditSuggestionForm
from flask import Blueprint, request
from app.models import db, Suggestion
from app.forms.suggestion_form import SuggestionForm
from .utils import validation_errors_to_error_messages
from werkzeug.utils import secure_filename
from .aws_s3 import public_file_upload
import os

suggestion_routes = Blueprint("suggestions", __name__)

@suggestion_routes.route('/')
def suggestions():
    suggestions = Suggestion.query.all()

    return {"suggestions": [suggestion.to_dict() for suggestion in suggestions]}

@suggestion_routes.route('/', methods=["POST"])
def create_suggestion():
    form = SuggestionForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():

        img_file = None

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

        suggestion = Suggestion(
            type=request.form["type"],
            title=request.form["title"],
            description=request.form["description"],
            user_id=request.form["user_id"],
            img_url=img_url
        )

        db.session.add(suggestion)
        db.session.commit()

        return suggestion.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@suggestion_routes.route('/', methods=["PUT"])
# Why does this take an ID
def update_suggestion(id):
    suggestion = Suggestion.query.get(id)

    form = EditSuggestionForm()
    form["csrf_token"].data = request.cookies("csrf_token")

    if form.validate_on_submit():

        type=request.form["type"],
        title=request.form["title"],
        description=request.form["description"],
        user_id=request.form["user_id"],
        img_file = None
        img_url=suggestion.img_url

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

        if type:
            suggestion.type = type
        if title:
            suggestion.title = title
        if description:
            suggestion.description = description
        if user_id:
            suggestion.user_id = user_id
        if img_url:
            suggestion.img_url = img_url
    
        db.session.commit()

        return suggestion.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
