from .db import db

class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(1000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    sighting_id = db.Column(db.Integer, db.ForeignKey("sightings.id"))
    animal_id = db.Column(db.Integer, db.ForeignKey("animals.id"))

    user = db.relationship("User", back_populates = "comments", cascade="all, delete-orphan")
    sighting = db.relationship("Sighting", back_populates = "comments", cascade="all, delete-orphan")
    animal = db.relationship("Animal", back_populates = "comments", cascade="all, delete-orphan")

    def to_dict(self):
        return {
        "id": self.id,
        "content": self.content,
        "userId": self.user_id,
        "sightingId": self.sighting_id
        }