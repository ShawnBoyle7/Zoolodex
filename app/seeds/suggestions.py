from app.models import db, Suggestion
from faker import Faker

faker = Faker()

def seed_suggestions():

    suggestions = []

    suggestions.append(Suggestion(type="animal", title="Red Panda", description=faker.text(300), img_url="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.21&w=1000&q=80", user_id=1))

    for suggestion in suggestions:
        db.session.add(suggestion)

    db.session.commit()


def undo_suggestions():
    db.session.execute('TRUNCATE suggestions RESTART IDENTITY CASCADE;')
    db.session.commit()
