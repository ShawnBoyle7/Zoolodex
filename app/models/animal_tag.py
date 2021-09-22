from .db import db

class AnimalTag(db.Model):
    __tablename__ = "animal_tags"

    id = db.Column(db.Integer, primary_key=True)
    terrestrial = db.Column(db.Boolean, nullable=False)
    volant = db.Column(db.Boolean, nullable=False)
    freshwater = db.Column(db.Boolean, nullable=False)
    marine = db.Column(db.Boolean, nullable=False)
    vertebrate = db.Column(db.Boolean, nullable=False)
    exoskeleton = db.Column(db.Boolean, nullable=False)