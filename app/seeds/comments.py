from app.models import db, Comment
from faker import Faker

faker = Faker()

def seed_comments():

    comments = []

    comments.append(Comment(
        content=faker.text(200),
        user_id=1,
        animal_id=1,
    ))

    for comment in comments:
        db.session.add(comment)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
