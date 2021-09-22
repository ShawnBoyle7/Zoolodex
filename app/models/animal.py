from .db import db

class Animal(db.Model):
    __tablename__ = "animals"

    id = db.Column(db.Integer, primary_key=True)
    animal_class = db.Column(db.String, nullable=False)
    family = db.Column(db.String, nullable=False)
    species = db.Column(db.String, nullable=False)
    sub_species = db.Column(db.String, nullable=False)