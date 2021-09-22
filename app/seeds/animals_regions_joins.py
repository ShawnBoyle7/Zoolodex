# from app.models import db
# from app.models.user import animals_regions_joins


# def seed_animals_regions_joins():
#     db.session.execute(animals_regions_joins.insert().values(animal_id = 1, region_id = 1))
#     db.session.commit()


# def undo_animals_regions_joins():
#     db.session.execute('TRUNCATE animals_regions_joins RESTART IDENTITY CASCADE;')
#     db.session.commit()