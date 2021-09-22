from .db import db

class Sighting(db.Model):
    __tablename__ = "sightings"

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String, nullable=False)
    sighting_latitude = db.Column(db.Decimal, nullable=False)
    sighting_longitude = db.Column(db.Decimal, nullable=False)
    sighting_date = db.Column(db.Timestamp, nullable=False)
    img_url_1 = db.Column(db.String, nullable=False)
    img_url_2 = db.Column(db.String, nullable=False)
    img_url_3 = db.Column(db.String, nullable=False)
    img_url_4 = db.Column(db.String, nullable=False)
    img_url_5 = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    animal_id = db.Column(db.Integer, db.ForeignKey("animals.id"))

    user = db.relationship("User", back_populates = "sightings", cascade="all, delete-orphan")
    animal = db.relationship("Animal", back_populates = "sightings", cascade="all, delete-orphan")
    comments = db.relationship("Comment", back_populates = "sighting", cascade="all, delete-orphan")

    def to_dict(self):
        return {
        "id": self.id,
        "description": self.description,
        "sightingLatitude": self.sighting_latitude,
        "sightingLongitude": self.sighting_longitude,
        "imgUrl1": self.img_url_1,
        "imgUrl2": self.img_url_2,
        "imgUrl3": self.img_url_3,
        "imgUrl4": self.img_url_4,
        "imgUrl5": self.img_url_5,
        "userId": self.user_id,
        "animalId": self.animal_id
        }