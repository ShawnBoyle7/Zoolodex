from app.models import db, Sighting
from faker import Faker

faker = Faker()

def seed_sightings():
    
    sightings = []

    sightings.append(Sighting(description=faker.text(200), sighting_latitude=-0.6420816460999217, sighting_longitude=-90.34405342645636, img_url_1="https://mediad.publicbroadcasting.net/p/kpcw/files/styles/x_large/public/202104/thumbnail_IMG_6520_0.jpg", img_url_2="https://images.wilderness-safaris.com/uploads/medium/file/10690/original_dimensions_Sightings_02.jpg", img_url_3="https://www.gtnpf.org/wp-content/uploads/IN-DESIGN-WW-NEW.jpg=", user_id=1, animal_id=1, region_id=1))
    
    sightings.append(Sighting(description=faker.text(200), sighting_latitude=-18.293452213506402, sighting_longitude=-23.9099836526035, img_url_1="https://mediad.publicbroadcasting.net/p/kpcw/files/styles/x_large/public/202104/thumbnail_IMG_6520_0.jpg", img_url_2="https://images.wilderness-safaris.com/uploads/medium/file/10690/original_dimensions_Sightings_02.jpg", img_url_3="https://www.gtnpf.org/wp-content/uploads/IN-DESIGN-WW-NEW.jpg=", user_id=1, animal_id=2, region_id=2))

    sightings.append(Sighting(description=faker.text(200), sighting_latitude=-3.465305, sighting_longitude=-62.215881, img_url_1="https://mediad.publicbroadcasting.net/p/kpcw/files/styles/x_large/public/202104/thumbnail_IMG_6520_0.jpg", img_url_2="https://images.wilderness-safaris.com/uploads/medium/file/10690/original_dimensions_Sightings_02.jpg", img_url_3="https://www.gtnpf.org/wp-content/uploads/IN-DESIGN-WW-NEW.jpg=", user_id=1, animal_id=3, region_id=3))

    sightings.append(Sighting(description=faker.text(200), sighting_latitude=44.10033117877291, sighting_longitude=132.1303709100248, img_url_1="https://mediad.publicbroadcasting.net/p/kpcw/files/styles/x_large/public/202104/thumbnail_IMG_6520_0.jpg", img_url_2="https://images.wilderness-safaris.com/uploads/medium/file/10690/original_dimensions_Sightings_02.jpg", img_url_3="https://www.gtnpf.org/wp-content/uploads/IN-DESIGN-WW-NEW.jpg=", user_id=2, animal_id=4, region_id=4))

    sightings.append(Sighting(description=faker.text(200), sighting_latitude=30.675624415807654, sighting_longitude=35.610516055274545, img_url_1="https://mediad.publicbroadcasting.net/p/kpcw/files/styles/x_large/public/202104/thumbnail_IMG_6520_0.jpg", img_url_2="https://images.wilderness-safaris.com/uploads/medium/file/10690/original_dimensions_Sightings_02.jpg", img_url_3="https://www.gtnpf.org/wp-content/uploads/IN-DESIGN-WW-NEW.jpg=", user_id=2, animal_id=5, region_id=5))

    for sighting in sightings:
        db.session.add(sighting)

    db.session.commit()


def undo_sightings():
    db.session.execute('TRUNCATE sightings RESTART IDENTITY CASCADE;')
    db.session.commit()
