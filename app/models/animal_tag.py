from .db import db

animals_tags_joins = db.Table(
    "animals_tags_joins",

    db.Column("id", db.Integer, primary_key=True),
    db.Column("animal_id", db.Integer, db.ForeignKey("animals.id")),
    db.Column("animal_tag_id", db.Integer, db.ForeignKey("animal_tags.id"))
)

class AnimalTag(db.Model):
    __tablename__ = "animal_tags"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)

    # Joins to animals, joins table defined below.
    animals = db.relationship("Animal", secondary="animals_tags_joins", back_populates = "animal_tags")

    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name
        }