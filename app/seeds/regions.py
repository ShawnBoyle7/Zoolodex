from app.models import db, Region
from faker import Faker

faker = Faker()

def seed_regions():

    regions = []

    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg")) # leopard

    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg")) # wolf

    regions.append(Region(name="Amur River", climate="Continental", continent="Asia", img_url_1="https://i.imgur.com/tPlkXo2.jpg", img_url_2="https://i.imgur.com/Kn0z1SH.jpg", img_url_3="https://i.imgur.com/lktN1ZF.jpg", img_url_4="https://i.imgur.com/tPlkXo2.jpg", img_url_5="https://i.imgur.com/I6qOOLq.jpg")) # tiger

    regions.append(Region(name="Linyanti", climate="Steppe", continent="Africa", img_url_1="https://i.imgur.com/XYcaXAI.jpg", img_url_2="https://i.imgur.com/URYnAc2.jpg", img_url_3="https://i.imgur.com/5lA0QE2.jpg", img_url_4="https://i.imgur.com/URttY4I.jpg", img_url_5="https://i.imgur.com/5BEXVgb.jpg")) # lion

    regions.append(Region(name="Andes", climate="Diverse", continent="South America", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg")) # hawk

    regions.append(Region(name="Amazon Rainforest", climate="Tropical Rainforest", continent="South America", img_url_1="https://i.imgur.com/UsGrLzF.jpg", img_url_2="https://i.imgur.com/jvXqOyv.jpg", img_url_3="https://i.imgur.com/pECwEZX.jpg", img_url_4="https://i.imgur.com/xwoIvG7.jpg", img_url_5="https://i.imgur.com/QDNmW7w.jpg")) # snake

    regions.append(Region(name="Hilton Head Island", climate="Temperate", continent="North America", img_url_1="https://i.imgur.com/zxAw5m7.jpg", img_url_2="https://i.imgur.com/3WJrVcd.jpg", img_url_3="https://i.imgur.com/wIGZRuZ.png", img_url_4="https://i.imgur.com/6aDN5Oi.jpg", img_url_5="https://i.imgur.com/XRFaJDJ.jpg")) # deer

    regions.append(Region(name="Kodiak Archipelago", climate="Marine", continent="North America", img_url_1="https://i.imgur.com/xrizPml.jpg", img_url_2="https://i.imgur.com/fC6214r.jpg", img_url_3="https://i.imgur.com/l51HAQF.jpg", img_url_4="https://i.imgur.com/TfmO1WO.jpg", img_url_5="https://i.imgur.com/GQEygrn.jpg")) # bear

    regions.append(Region(name="Marin Highlands", climate="Mediterranean", continent="North America", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg")) # butterfly

    regions.append(Region(name="Cascade Range", climate="Continental", continent="North America", img_url_1="https://i.imgur.com/33VGIx2.jpg", img_url_2="https://i.imgur.com/D1mauNL.jpg", img_url_3="https://i.imgur.com/haOKmSi.jpg", img_url_4="https://i.imgur.com/Y1u6xqZ.jpg", img_url_5="https://i.imgur.com/rgv6y5S.jpg")) # owl

    regions.append(Region(name="Aptos Forest", climate="Forest", continent="North America", img_url_1="https://i.imgur.com/jnYd76R.jpg", img_url_2="https://i.imgur.com/KkaRq5V.jpg", img_url_3="https://i.imgur.com/1MuGkmC.jpg", img_url_4="https://i.imgur.com/I9E29NR.jpg", img_url_5="https://i.imgur.com/Hd6e5Qt.jpg")) # salamander

    regions.append(Region(name="Galapagos Islands", climate="Tropical", continent="South America", img_url_1="https://i.imgur.com/GjOk59h.jpg", img_url_2="https://i.imgur.com/sH5gme8.jpg", img_url_3="https://i.imgur.com/12VHAHo.jpg", img_url_4="https://i.imgur.com/Fvc83Bv.jpg", img_url_5="https://i.imgur.com/GjOk59h.jpg")) # tortoise


    for region in regions:
        db.session.add(region)

    db.session.commit()


def undo_regions():
    db.session.execute('TRUNCATE regions RESTART IDENTITY CASCADE;')
    db.session.commit()
