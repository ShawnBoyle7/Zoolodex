from app.models import db
from app.models.region import animals_regions_joins
from faker import Faker

faker = Faker()


def seed_animals_regions_joins():
    db.session.execute(animals_regions_joins.insert().values(animal_id = 1, region_id = 1))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 2, region_id = 2))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 3, region_id = 3))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 4, region_id = 4))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 5, region_id = 5))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 6, region_id = 6))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 7, region_id = 7))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 8, region_id = 8))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 9, region_id = 9))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 10, region_id = 10))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 11, region_id = 11))
    db.session.execute(animals_regions_joins.insert().values(animal_id = 12, region_id = 12))
    db.session.commit()


def undo_animals_regions_joins():
    db.session.execute('TRUNCATE animals_regions_joins RESTART IDENTITY CASCADE;')
    db.session.commit()