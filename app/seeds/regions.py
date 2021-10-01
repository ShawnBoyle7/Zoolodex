from app.models import db, Region
from faker import Faker

faker = Faker()

def seed_regions():

    regions = []

    regions.append(Region(name="Galapagos Islands", climate="Tropical", continent="South America", img_url="https://i.imgur.com/913xVPP.jpg")) # tortoise

    regions.append(Region(name="Linyanti", climate="Steppe", continent="Africa", img_url="https://i.imgur.com/XBlLtVA.jpg")) # lion

    regions.append(Region(name="Amazon Rainforest", climate="Tropical Rainforest", continent="South America", img_url="https://i.imgur.com/jCo9qWa.jpg")) # snake

    regions.append(Region(name="Amur Heilong Forests", climate="Monsoon", continent="Asia", img_url="https://i.imgur.com/Xc5NF8b.jpg")) # leopard

    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url="https://i.imgur.com/S9tHAtL.jpg")) # wolf

    regions.append(Region(name="Paro", climate="Subtropical", continent="Asia", img_url="https://i.imgur.com/OTO1w6Q.jpg")) # tiger

    regions.append(Region(name="Andes", climate="Diverse", continent="South America", img_url="https://i.imgur.com/Jfx0kfu.jpg")) # hawk

    regions.append(Region(name="Kodiak Archipelago", climate="Marine", continent="North America", img_url="https://i.imgur.com/OS7rbck.jpg")) # bear

    regions.append(Region(name="Cascade Range", climate="Continental", continent="North America", img_url="https://i.imgur.com/hqPcHcN.jpg")) # owl

    regions.append(Region(name="Nisene Marks Forest", climate="Mediterranean", continent="North America", img_url="https://i.imgur.com/P947oaV.jpg")) # salamander
    
    regions.append(Region(name="Marin Headlands", climate="Mediterranean", continent="North America", img_url="https://i.imgur.com/EeNQMqe.png")) # butterfly

    regions.append(Region(name="Hilton Head Island", climate="Temperate", continent="North America", img_url="https://i.imgur.com/OQ6eX0I.jpg")) # deer




    for region in regions:
        db.session.add(region)

    db.session.commit()


def undo_regions():
    db.session.execute('TRUNCATE regions RESTART IDENTITY CASCADE;')
    db.session.commit()
