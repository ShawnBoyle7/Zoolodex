from flask import Blueprint, request
from app.models import db, Comment
from app.forms import CommentForm
from .utils import validation_errors_to_error_messages

comment_routes = Blueprint("comments", __name__)

@comment_routes.route('/')
def comments():
    comments = Comment.query.all()

    return {"comments": [comment.to_dict() for comment in comments]}

@comment_routes.route('/', methods=["POST"])
def new_comment():
    # When invoking a FlaskForm, it will automatically try to populate its' FormFields with key/value pairs form the request body (the keys must match the name of the FormField)
    # Upon creating the FlaskForm instance, the incoming req body key/value pairs will be validated according to the EditUserForm class. Any errors will be sent back to the front-end
    # The specific Form Fields also cast the incoming data into the appropriate data type (i.e. IntegerField will be stored as an integer)
    form = CommentForm()
    
    # Creating a csrf token from the request import on our form instance
    form["csrf_token"].data = request.cookies["csrf_token"]
    # If there are no errors after the form has validated the request body, then we will build an instance of our model to send to the database
    if form.validate_on_submit():
        comment = Comment(
            # Building a class model by creating instance variables on the object as data for the columns which we will send to the database to populate it
            content=form.data["content"],
            user_id=form.data["user_id"],
            animal_id=form.data["animal_id"],
            sighting_id=form.data["sighting_id"]
        )
        # Add the instance to our database
        db.session.add(comment)
        # Commit the changes to our database
        db.session.commit()
        # Return our instance in a format that can be stored in our frontend, since our thunk will take this return as the response
        return comment.to_dict()
        
    # If the form had validation errors, we return a dictionary with a key of errors and each error as a value, with a 401 error code.
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

