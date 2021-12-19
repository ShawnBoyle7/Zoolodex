from app.models import db, Region
from faker import Faker

faker = Faker()

def seed_regions():

    regions = []

    regions.append(Region(name="Galapagos Islands", region_latitude="-0.3336497769044674", region_longitude="-90.42073495594352", climate="Tropical", continent="South America", img_url="https://i.imgur.com/4F0niH7.jpeg", cropped_url="https://i.imgur.com/f7SqRvp.png")) # tortoise

    regions.append(Region(name="Linyanti", region_latitude="-18.293452213506402", region_longitude="23.9099836526035", climate="Steppe", continent="Africa", img_url="https://i.imgur.com/XBlLtVA.jpg", cropped_url="https://i.imgur.com/ylXUrdW.jpeg")) # lion

    regions.append(Region(name="Amazon Rainforest", region_latitude="-3.465305", region_longitude="-62.215881", climate="Tropical Rainforest", continent="South America", img_url="https://i.imgur.com/jCo9qWa.jpg", cropped_url="https://i.imgur.com/2jJrUcU.jpeg")) # snake

    regions.append(Region(name="Primorsky Krai", region_latitude="44.10033117877291", region_longitude="132.1303709100248", climate="Monsoon", continent="Asia", img_url="https://i.imgur.com/i11rRdc.jpg", cropped_url="https://i.imgur.com/Qx1Zusi.png")) # leopard

    regions.append(Region(name="Dana Biosphere Reserve", region_latitude="30.675624415807654", region_longitude="35.610516055274545", climate="Desert", continent="Asia", img_url="https://i.imgur.com/S9tHAtL.jpg", cropped_url="https://i.imgur.com/6iSnfA3.jpeg")) # wolf

    regions.append(Region(name="Paro", climate="Subtropical", region_latitude="27.474679095042582", region_longitude="89.43158561524324", continent="Asia", img_url="https://i.imgur.com/OTO1w6Q.jpg", cropped_url="https://i.imgur.com/BwNkopR.jpeg")) # tiger

    regions.append(Region(name="Andes", climate="Diverse", region_latitude="-20.521893459861886", region_longitude="-66.43175276914344", continent="South America", img_url="https://i.imgur.com/Jfx0kfu.jpg", cropped_url="https://i.imgur.com/O0KSjiG.jpeg")) # hawk

    regions.append(Region(name="Kodiak Archipelago", region_latitude="57.53564949425021", region_longitude="-153.48241108543098", climate="Marine", continent="North America", img_url="https://i.imgur.com/OS7rbck.jpg", cropped_url="https://i.imgur.com/k824jy4.png")) # bear

    regions.append(Region(name="Cascade Range", region_latitude="46.17621114081942", region_longitude="-121.90860735222145", climate="Continental", continent="North America", img_url="https://i.imgur.com/hqPcHcN.jpg", cropped_url="https://i.imgur.com/XkQHkDW.jpeg")) # owl

    regions.append(Region(name="Nisene Marks Forest", region_latitude="37.01874085629854", region_longitude="-121.90516898018964", climate="Mediterranean", continent="North America", img_url="https://i.imgur.com/P947oaV.jpg", cropped_url="https://i.imgur.com/fZr8ZIT.jpeg")) # salamander
    
    regions.append(Region(name="Marin Headlands", region_latitude="37.82709340194895", region_longitude="-122.49982958165494", climate="Mediterranean", continent="North America", img_url="https://i.imgur.com/EeNQMqe.png", cropped_url="https://i.imgur.com/x54ePH7.jpeg")) # butterfly

    regions.append(Region(name="Hilton Head Island", region_latitude="32.31592682328047", region_longitude="-80.77579488688757", climate="Temperate", continent="North America", img_url="https://i.imgur.com/OQ6eX0I.jpg", cropped_url="https://i.imgur.com/ahzroRn.png")) # deer




    for region in regions:
        db.session.add(region)

    db.session.commit()


def undo_regions():
    db.session.execute('TRUNCATE regions RESTART IDENTITY CASCADE;')
    db.session.commit()
