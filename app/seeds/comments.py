from app.models import db, Comment
from faker import Faker

faker = Faker()

def seed_comments():

    comments = []

    comments.append(Comment(
      content="mammal",
      user_id="felidae",
      animal_id="leopard",
    ))

    db.session.add(comments)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
