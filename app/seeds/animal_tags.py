from app.models import db, AnimalTag


def seed_animal_tags():

    terrestrial = AnimalTag(
        name="terrestrial"
    )

    volant = AnimalTag(
        name="volant"
    )

    freshwater = AnimalTag(
        name="freshwater"
    )

    marine = AnimalTag(
        name="marine"
    )

    vertebrate = AnimalTag(
        name="vertebrate"
    )

    exoskeleton = AnimalTag(
        name="exoskeleton"
    )

    db.session.add(terrestrial)
    db.session.add(volant)
    db.session.add(freshwater)
    db.session.add(marine)
    db.session.add(vertebrate)
    db.session.add(exoskeleton)

    db.session.commit()


def undo_animal_tags():
    db.session.execute('TRUNCATE animal_tags RESTART IDENTITY CASCADE;')
    db.session.commit()
