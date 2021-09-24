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
def post_suggestion():
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











# # REFACTOR FOR AWS
# @suggestion_routes.route('/', methods=["POST"])
# def post_suggestion():

#     # When invoking a FlaskForm, it will automatically try to populate its' FormFields with key/value pairs form the request body (the keys must match the name of the FormField)

#     # Upon creating the FlaskForm instance, the incoming req body key/value pairs will be validated according to the EditUserForm class. Any errors will be sent back to the front-end

#     # The specific Form Fields also cast the incoming data into the appropriate data type (i.e. IntegerField will be stored as an integer)
#     form = SuggestionForm()
    
#     # Creating a csrf token from the request import on our form instance
#     form["csrf_token"].data = request.cookies["csrf_token"]

#     # If there are no errors after the form has validated the request body, then we will build an instance of our model to send to the database
    # if form.validate_on_submit():
    #     suggestion = Suggestion(

    #         # Building a class model by creating instance variables on the object as data for the columns which we will send to the database to populate it
    #         type=form.data["type"],
    #         title=form.data["title"],
    #         description=form.data["description"],
    #         img_url=form.data["img_url"],
    #         user_id=form.data["user_id"]
    #     )

#         # Add the instance to our database
#         db.session.add(suggestion)

#         # Commit the changes to our database
#         db.session.commit()
#         # Return our instance in a format that can be stored in our frontend, since our thunk will take this return as the response
#         return suggestion.to_dict()
        
#     # If the form had validation errors, we return a dictionary with a key of errors and each error as a value, with a 401 error code.
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401