from app.models import db, Animal
from faker import Faker

faker = Faker()

def seed_animals():

    # article_template = '{{"origins": "{0}",  "traits": "{1}", "ecosystemInfluence": "{2}" }}'

    # origins = faker.text(99)
    # traits = faker.text(99)
    # ecosystem_influence = faker.text(99)

    # animals.append(Animal(group="Mammal", family="Felidae", species="Leopard", sub_species="Amur Leopard", img_url="https://untamedanimals.com/wp-content/uploads/2021/01/Do-Leopards-Live-In-The-Jungle.jpg", article=article_template.format(origins, traits,ecosystem_influence)))

    animals = []
    
    animals.append(Animal(group="Mammal", family="Felidae", species="Leopard", sub_species="Amur Leopard", img_url="https://untamedanimals.com/wp-content/uploads/2021/01/Do-Leopards-Live-In-The-Jungle.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    for animal in animals:
        db.session.add(animal)

    db.session.commit()


def undo_animals():
    db.session.execute('TRUNCATE animals RESTART IDENTITY CASCADE;')
    db.session.commit()
