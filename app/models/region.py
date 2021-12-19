from .db import db

animals_regions_joins = db.Table(
    "animals_regions_joins",

    db.Column("id", db.Integer, primary_key=True),
    db.Column("animal_id", db.Integer, db.ForeignKey("animals.id")),
    db.Column("region_id", db.Integer, db.ForeignKey("regions.id"))
)

class Region(db.Model):
    __tablename__ = "regions"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    region_latitude = db.Column(db.Float, nullable=False)
    region_longitude = db.Column(db.Float, nullable=False)
    climate = db.Column(db.String(25), nullable=False)
    continent = db.Column(db.String(25), nullable=False)
    img_url = db.Column(db.String(255))
    cropped_url = db.Column(db.String(255))

    # Joins to animals, joins table defined below.
    animals = db.relationship("Animal", secondary="animals_regions_joins", back_populates = "regions")

    def to_dict(self):
        animals = [animal.id for animal in self.animals]

        return {
        "id": self.id,
        "name": self.name,
        "regionLatitude": self.region_latitude,
        "regionLongitude": self.region_longitude,
        "climate": self.climate,
        "continent": self.continent,
        "imgUrl": self.img_url,
        "croppedUrl": self.cropped_url,
        "animals": animals
        }