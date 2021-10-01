from app.models import db, Sighting
from faker import Faker

faker = Faker()

def seed_sightings():
    
    sightings = []

    sightings.append(Sighting(description=faker.text(200), sighting_latitude=59.08692,sighting_longitude=54.84909, img_url_1="https://mediad.publicbroadcasting.net/p/kpcw/files/styles/x_large/public/202104/thumbnail_IMG_6520_0.jpg", img_url_2="https://images.wilderness-safaris.com/uploads/medium/file/10690/original_dimensions_Sightings_02.jpg", img_url_3="https://www.gtnpf.org/wp-content/uploads/IN-DESIGN-WW-NEW.jpg=", user_id=1, animal_id=1))

    for sighting in sightings:
        db.session.add(sighting)

    db.session.commit()


def undo_sightings():
    db.session.execute('TRUNCATE sightings RESTART IDENTITY CASCADE;')
    db.session.commit()
