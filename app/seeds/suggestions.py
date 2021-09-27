from app.models import db, Suggestion
from faker import Faker

faker = Faker()

def seed_suggestions():

    suggestions = []

    # Animals

    suggestions.append(Suggestion(type="animal", title="Akhal Tele Horse", description=faker.text(300), img_url="https://i.imgur.com/tVPgWV1.png", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Red Panda", description=faker.text(300), img_url="https://i.imgur.com/YCvNuJD.jpeg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="African Lion", description=faker.text(300), img_url="https://i.imgur.com/83ejGKm.jpeg", user_id=3))

    suggestions.append(Suggestion(type="animal", title="European Fox", description=faker.text(300), img_url="https://i.imgur.com/vShY2fC.jpeg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Qinling Panda", description=faker.text(300), img_url="https://i.imgur.com/UkFt5AN.jpeg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Calfornian Condor", description=faker.text(300), img_url="https://i.imgur.com/an6WLFu.jpeg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Earthworm", description=faker.text(300), img_url="https://i.imgur.com/fQkZb2m.jpeg", user_id=3))

    suggestions.append(Suggestion(type="animal", title="Hercules Beetle", description=faker.text(300), img_url="https://i.imgur.com/A1eFiE2.jpeg", user_id=2))

    suggestions.append(Suggestion(type="animal", title="South American Jaguar", description=faker.text(300), img_url="https://i.imgur.com/r67YTa1.jpeg", user_id=2))

    suggestions.append(Suggestion(type="animal", title="Argentinosaurus", description=faker.text(300), img_url="https://i.imgur.com/6oqKFo6.jpeg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Silverback Gorilla", description=faker.text(300), img_url="https://i.imgur.com/U82Dddv.jpeg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="White Raven", description=faker.text(300), img_url="https://i.imgur.com/mweGpmD.jpeg", user_id=1))


    # Regions

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=1))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=1))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=1))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=1))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=1))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=1))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=1))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=1))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=2))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=3))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=2))

    suggestions.append(Suggestion(type="region", title="", description=faker.text(300), img_url="", user_id=3))

    for suggestion in suggestions:
        db.session.add(suggestion)

    db.session.commit()


def undo_suggestions():
    db.session.execute('TRUNCATE suggestions RESTART IDENTITY CASCADE;')
    db.session.commit()
