from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    img_url = db.Column(db.String(255), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    comments = db.relationship("Comment", back_populates = "user", cascade="all, delete-orphan")
    suggestions = db.relationship("Suggestion", back_populates = "user", cascade="all, delete-orphan")
    sightings = db.relationship("Sighting", back_populates = "user", cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'imgUrl': self.img_url,
        }

    def session_to_dict(self):
        sightings = [sighting.id for sighting in self.sightings]
        suggestions = [suggestion.id for suggestion in self.suggestions]
        return {
            'id': self.id,
            'email': self.email,
            'username': self.username,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'imgUrl': self.img_url,
            "suggestions": suggestions,
            "sightings": sightings
        }