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
    animal_tags = db.relationship("AnimalTag", secondary = "animals_tags_joins", back_populates = "animals")

    # Joins to regions, table is on the other model.
    regions = db.relationship("Region", secondary = "animals_regions_joins", back_populates = "animals")

    def to_dict(self):
        sightings = [sighting.id for sighting in self.sightings]
        animal_tags = [animal_tag.id for animal_tag in self.animal_tags]
        regions = [region.id for region in self.regions]
        comments = [comment.id for comment in self.comments]

        return {
        "id": self.id,
        "group": self.group,
        "family": self.family,
        "species": self.species,
        "subSpecies": self.sub_species,
        "article": self.article,
        "sightings": sightings,
        "regions": regions,
        "animalTags": animal_tags,
        "comments": comments
        }