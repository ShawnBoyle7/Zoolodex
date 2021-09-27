from app.models import db, Region
from faker import Faker

faker = Faker()

def seed_regions():

    regions = []

    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    regions.append(Region(name="Amazon Rainforest", climate="Tropical Rainforest", continent="South America", img_url_1="https://i.imgur.com/UsGrLzF.jpg", img_url_2="https://i.imgur.com/jvXqOyv.jpg", img_url_3="https://i.imgur.com/pECwEZX.jpg", img_url_4="https://i.imgur.com/xwoIvG7.jpg", img_url_5="https://i.imgur.com/QDNmW7w.jpg"))
    regions.append(Region(name="Hilton Head Island", climate="Temperate", continent="North America", img_url_1="https://i.imgur.com/zxAw5m7.jpg", img_url_2="https://i.imgur.com/3WJrVcd.jpg", img_url_3="https://i.imgur.com/wIGZRuZ.png", img_url_4="https://i.imgur.com/6aDN5Oi.jpg", img_url_5="https://i.imgur.com/XRFaJDJ.jpg"))

    regions.append(Region(name="Linyanti", climate="Steppe", continent="Africa", img_url_1="https://i.imgur.com/XYcaXAI.jpg", img_url_2="https://i.imgur.com/URYnAc2.jpg", img_url_3="https://i.imgur.com/5lA0QE2.jpg", img_url_4="https://i.imgur.com/URttY4I.jpg", img_url_5="https://i.imgur.com/5BEXVgb.jpg"))
    
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    
    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))
    regions.append(Region(name="Amur Heilong Forests", climate="Forest", continent="Asia", img_url_1="https://i.imgur.com/NTbPZdK.png", img_url_2="https://i.imgur.com/tEUU0Gy.jpg", img_url_3="https://i.imgur.com/lmG8HrJ.jpg", img_url_4="https://i.imgur.com/ftHe6Ct.jpg", img_url_5="https://i.imgur.com/BayYwuD.jpg"))
    regions.append(Region(name="Dana Biosphere Reserve", climate="Desert", continent="Asia", img_url_1="https://i.imgur.com/cMQvGpO.jpg", img_url_2="https://i.imgur.com/X9oLhb9.jpg", img_url_3="https://i.imgur.com/5IEDWuY.jpg", img_url_4="https://i.imgur.com/TL42F0A.jpg", img_url_5="https://i.imgur.com/EfDSua1.jpg"))

    for region in regions:
        db.session.add(region)

    db.session.commit()


def undo_regions():
    db.session.execute('TRUNCATE regions RESTART IDENTITY CASCADE;')
    db.session.commit()
