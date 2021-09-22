from .db import db

class Animal(db.Model):
    __tablename__ = "animals"

    id = db.Column(db.Integer, primary_key=True)
    group = db.Column(db.String, nullable=False)
    family = db.Column(db.String, nullable=False)
    species = db.Column(db.String, nullable=False)
    sub_species = db.Column(db.String, nullable=False)
    article = db.Column(db.String)

    sightings = db.relationship("Sighting", back_populates = "animal", cascade="all, delete-orphan")
    comments = db.relationship("Comment", back_populates = "animal", cascade="all, delete-orphan")

    # Joins to animal_tags, table is on the other model.
    animal_tags = db.relationship("Animal", secondary = "animals_tags_joins", back_populates = "animals", cascade="all, delete-orphan")

    # Joins to regions, table is on the other model.
    regions = db.relationship("Region", secondary = "animals_regions_joins", back_populates = "animals", cascade="all, delete-orphan")

    def to_dict(self):
        return {
        "id": self.id,
        "group": self.group,
        "family": self.family,
        "species": self.species,
        "subSpecies": self.sub_species
        }