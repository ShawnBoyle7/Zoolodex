from app.models import db, Sighting
from faker import Faker

faker = Faker()

def seed_sightings():
    
    sightings = []

    sightings.append(Sighting(description=faker.text(200), sighting_latitude=59.08692,sighting_longitude=54.84909, img_url_1="https://mediad.publicbroadcasting.net/p/kpcw/files/styles/x_large/public/202104/thumbnail_IMG_6520_0.jpg", img_url_2="https://images.wilderness-safaris.com/uploads/medium/file/10690/original_dimensions_Sightings_02.jpg", img_url_3="https://www.gtnpf.org/wp-content/uploads/IN-DESIGN-WW-NEW.jpg=", img_url_4="https://3gz8cg829c.execute-api.us-west-2.amazonaws.com/prod/image-renderer/16x9/full/1015/center/8052fcb479-4e4f-470f-a7a9-0321d54f74de-large16x9_cougar.jpg", img_url_5="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_962,q_65,w_640/v1/clients/whitemountainsnhThingsToDo_Wildlife_49d3eed8-ab39-4d93-80ce-4a763b46cb17.jpg", user_id=1, animal_id=1))

    db.session.add(sightings)

    db.session.commit()


def undo_sightings():
    db.session.execute('TRUNCATE sightings RESTART IDENTITY CASCADE;')
    db.session.commit()
