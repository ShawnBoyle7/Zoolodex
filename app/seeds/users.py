from app.models import db, User


def seed_users():
    demo = User(
        username='DemoUser', email='demo@demo.io', first_name="Demo", last_name="User", img_url="https://i.imgur.com/Cj4zTKH.png", password='Password1!')
    chadwick = User(
        username='GreekLife', email='chadwickrules@chadwick.io', first_name="Chadwick", last_name="Dezin", img_url="https://i.imgur.com/qyWCbfY.png", password='Password1!')
    roman = User(
        username='BigRome', email='the_rome@roman.io', first_name="Roman", last_name="Montera", img_url="https://i.imgur.com/ZFv0gcF.png", password='Password1!')
    
    db.session.add(demo)
    db.session.add(chadwick)
    db.session.add(roman)

    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
