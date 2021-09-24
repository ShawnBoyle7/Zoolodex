from .db import db

class Suggestion(db.Model):
    __tablename__ = "suggestions"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    img_url = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    user = db.relationship("User", back_populates = "suggestions")

    def to_dict(self):
        return {
        "id": self.id,
        "type": self.type,
        "title": self.title,
        "description": self.description,
        "imgUrl": self.img_url,
        "userId": self.user_id,
        }