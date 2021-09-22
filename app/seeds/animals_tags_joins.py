from app.models import db
from app.models.animal_tag import animals_tags_joins


def seed_animals_tags_joins():
    db.session.execute(animals_tags_joins.insert().values(animal_id = 1, animal_tag_id = 1))
    db.session.commit()


def undo_animals_tags_joins():
    db.session.execute('TRUNCATE animals_tags_joins RESTART IDENTITY CASCADE;')
    db.session.commit()