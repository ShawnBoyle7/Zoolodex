from app.models import db, Comment
from faker import Faker

faker = Faker()

def seed_comments():

    comments = []

    # 1

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=1,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=1,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=1,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=1,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=1,
    ))

    # 2

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=2,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=2,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=2,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=2,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=2,
    ))

    # 3
    
    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=3,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=3,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=3,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=3,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=3,
    ))

    # 4

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=4,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=4,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=4,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=4,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=4,
    ))

    # 5

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=5,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=5,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=5,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=5,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=5,
    ))

    # 6

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=6,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=6,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=6,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=6,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=6,
    ))

    # 7

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=7,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=7,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=7,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=7,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=7,
    ))

    # 8

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=8,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=8,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=8,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=8,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=8,
    ))

    # 9

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=9,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=9,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=9,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=9,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=9,
    ))

    # 10

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=10,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=10,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=10,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=10,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=10,
    ))

    # 11

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=11,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=11,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=11,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=11,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=11,
    ))

    # 12

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=12,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=2,
        animal_id=12,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=12,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=3,
        animal_id=12,
    ))

    comments.append(Comment(
        content=faker.text(400),
        user_id=1,
        animal_id=12,
    ))
    


    for comment in comments:
        db.session.add(comment)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
