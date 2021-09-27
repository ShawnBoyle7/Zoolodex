from app.models import db, Suggestion
from faker import Faker

faker = Faker()

def seed_suggestions():

    suggestions = []

    # Animals

    suggestions.append(Suggestion(type="animal", title="Akhal Tele Horse", description=faker.text(300), img_url="https://i.imgur.com/69NNq2z.png", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Red Panda", description=faker.text(300), img_url="https://i.imgur.com/KYNYa4z.jpg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="African Lion", description=faker.text(300), img_url="https://i.imgur.com/6MZ0nTo.jpg", user_id=3))

    suggestions.append(Suggestion(type="animal", title="European Fox", description=faker.text(300), img_url="https://i.imgur.com/hl9U3he.jpg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Qinling Panda", description=faker.text(300), img_url="https://i.imgur.com/qHyJNtE.jpg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Calfornian Condor", description=faker.text(300), img_url="https://i.imgur.com/x3l0AL1.jpg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Earthworm", description=faker.text(300), img_url="https://i.imgur.com/LgtoYN1.jpg", user_id=3))

    suggestions.append(Suggestion(type="animal", title="Hercules Beetle", description=faker.text(300), img_url="https://i.imgur.com/C30OpAA.png", user_id=2))

    suggestions.append(Suggestion(type="animal", title="South American Jaguar", description=faker.text(300), img_url="https://i.imgur.com/qbWyN5i.jpg", user_id=2))

    suggestions.append(Suggestion(type="animal", title="Argentinosaurus", description=faker.text(300), img_url="https://i.imgur.com/YzdJI6n.png", user_id=1))

    suggestions.append(Suggestion(type="animal", title="Silverback Gorilla", description=faker.text(300), img_url="https://i.imgur.com/V4u6cdx.jpg", user_id=1))

    suggestions.append(Suggestion(type="animal", title="White Raven", description=faker.text(300), img_url="https://i.imgur.com/dR0TKCr.png", user_id=1))


    # Regions

    suggestions.append(Suggestion(type="region", title="The Antarctic Peninsula", description=faker.text(300), img_url="https://i.imgur.com/qAPlL2p.png", user_id=1))

    suggestions.append(Suggestion(type="region", title="Drake Passage", description=faker.text(300), img_url="https://i.imgur.com/vkuQskF.png", user_id=1))

    suggestions.append(Suggestion(type="region", title="Llanos Grasslands", description=faker.text(300), img_url="https://i.imgur.com/tSMOCZ5.png", user_id=1))

    suggestions.append(Suggestion(type="region", title="Sahara Desert", description=faker.text(300), img_url="https://i.imgur.com/XqXfBFY.jpeg", user_id=1))

    suggestions.append(Suggestion(type="region", title="Masai Mara", description=faker.text(300), img_url="https://i.imgur.com/7VE52Ex.jpeg", user_id=1))

    suggestions.append(Suggestion(type="region", title="Kaziranga National Park", description=faker.text(300), img_url="https://i.imgur.com/qwHGp82.jpeg", user_id=1))

    suggestions.append(Suggestion(type="region", title="The Ngorongoro Crater", description=faker.text(300), img_url="https://i.imgur.com/YAB7OkQ.jpeg", user_id=1))

    suggestions.append(Suggestion(type="region", title="Okavango Delta", description=faker.text(300), img_url="https://i.imgur.com/nZH44DL.jpeg", user_id=2))

    suggestions.append(Suggestion(type="region", title="Volcanoes National Park", description=faker.text(300), img_url="https://i.imgur.com/MDN3CHl.jpeg", user_id=1))

    suggestions.append(Suggestion(type="region", title="Kiribati", description=faker.text(300), img_url="https://i.imgur.com/cL4jslW.jpeg", user_id=2))

    suggestions.append(Suggestion(type="region", title="Kerguelen Islands", description=faker.text(300), img_url="https://i.imgur.com/kGoNjMI.jpeg", user_id=3))

    suggestions.append(Suggestion(type="region", title="Sabi Sands Game Reserve", description=faker.text(300), img_url="https://i.imgur.com/f9PHHWY.jpeg", user_id=3))

    for suggestion in suggestions:
        db.session.add(suggestion)

    db.session.commit()


def undo_suggestions():
    db.session.execute('TRUNCATE suggestions RESTART IDENTITY CASCADE;')
    db.session.commit()
