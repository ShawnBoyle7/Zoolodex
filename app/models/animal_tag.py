from .db import db

class AnimalTag(db.Model):
    __tablename__ = "animal_tags"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    # animal = db.relationship("Animal", back_populates = "tags", cascade="all, delete-orphan")

    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name
        }