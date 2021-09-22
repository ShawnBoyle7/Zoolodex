from .db import db

class Animal(db.Model):
    __tablename__ = "animals"

    id = db.Column(db.Integer, primary_key=True)
    group = db.Column(db.String, nullable=False)
    family = db.Column(db.String, nullable=False)
    species = db.Column(db.String, nullable=False)
    sub_species = db.Column(db.String, nullable=False)

    # regions = db.relationship("Region", back_populates = "animals", cascade="all, delete-orphan")
    # tags = db.relationship("Tag", back_populates = "animals", cascade="all, delete-orphan")
    sightings = db.relationship("Sighting", back_populates = "animal", cascade="all, delete-orphan")

    def to_dict(self):
        return {
        "id": self.id,
        "group": self.group,
        "family": self.family,
        "species": self.species,
        "subSpecies": self.sub_species
        }