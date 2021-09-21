from app.models import db, User


def seed_users():
    demo = User(
        username='Demouser', email='demo@demo.io', first_name="demo", last_name="user", img_url="https://i.imgur.com/tGthvVP.png", password='password')
    chadwick = User(
        username='greek_life', email='chadwickrules@chadwick.io', first_name="Chadwick", last_name="Dezin", img_url="https://i.imgur.com/tGthvVP.png", password='password')
    roman = User(
        username='big_rome', email='the_rome@roman.io', first_name="Roman", last_name="Montera", img_url="https://i.imgur.com/tGthvVP.png", password='password')

    db.session.add(demo)
    db.session.add(chadwick)
    db.session.add(roman)

    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
