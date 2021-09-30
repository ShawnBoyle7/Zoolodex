from .db import db


class Animal(db.Model):
    __tablename__ = "animals"

    id = db.Column(db.Integer, primary_key=True)
    group = db.Column(db.String(30), nullable=False)
    family = db.Column(db.String(30), nullable=False)
    species = db.Column(db.String(30), nullable=False)
    sub_species = db.Column(db.String(30), nullable=False)
    img_url = db.Column(db.String(255), nullable=False)
    origins = db.Column(db.String(10000), nullable=False)
    traits = db.Column(db.String(10000), nullable=False)
    ecosystem_influence = db.Column(db.String(10000), nullable=False)

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
        "imgUrl": self.img_url,
        "origins": self.origins,
        "traits": self.traits,
        "ecosystemInfluence": self.ecosystem_influence,
        "sightings": sightings,
        "regions": regions,
        "animalTags": animal_tags,
        "comments": comments,
        }