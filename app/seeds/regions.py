from app.models import db, Region
from faker import Faker

faker = Faker()

def seed_regions():

    regions = []

    regions.append(Region(name="Mole National Park", climate="Savanna", continent="Africa", img_url_1="https://mocah.org/thumbs/576778-jungle-wallpaper.jpg", img_url_2="https://wallpapercave.com/wp/wp2459809.jpg", img_url_3="https://wallpapercave.com/wp/wp4565477.jpg", img_url_4="https://images2.alphacoders.com/294/thumbbig-29492.webp", img_url_5="https://images.pexels.com/photos/109391/pexels-photo-109391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
    
    db.session.add(regions)

    db.session.commit()


def undo_regions():
    db.session.execute('TRUNCATE regions RESTART IDENTITY CASCADE;')
    db.session.commit()
