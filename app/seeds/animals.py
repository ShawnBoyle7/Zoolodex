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
    
    animals.append(Animal(group="Reptile", family="Testudinidae", species="Galapagos Tortoise", sub_species="Santiago Island Giant Tortoise", img_url="https://i.imgur.com/UAY0kHR.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Mammal", family="Felidae", species="Lion", sub_species="Katanga Lion", img_url="https://i.imgur.com/n3SF630.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Reptile", family="Boidae", species="Anaconda", sub_species="Green Anaconda", img_url="https://i.imgur.com/rWTiPPD.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Mammal", family="Felidae", species="Leopard", sub_species="Amur Leopard", img_url="https://i.imgur.com/qzCntDT.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Mammal", family="Canidae", species="Wolf", sub_species="Arabian Wolf", img_url="https://i.imgur.com/mImcDDt.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Mammal", family="Felidae", species="Tiger", sub_species="Amur Tiger", img_url="https://i.imgur.com/G9PPFEj.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Aves", family="Accipitridae", species="Red-tailed Hawk", sub_species="Western Red-tailed Hawk", img_url="https://i.imgur.com/Q4Q4GYK.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Ursidae", family="Ursidae", species="Brown Bear", sub_species="Kodiak Bear", img_url="https://i.imgur.com/0tslWhE.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))
    
    animals.append(Animal(group="Aves", family="Strigidae", species="Spotted Owl", sub_species="Northern Spotted Owl", img_url="https://i.imgur.com/qzdWzN9.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Amphibian", family="Ambystomatidae", species="Long-toed Salamander", sub_species="Santa Cruz Long-toed Salamander", img_url="https://i.imgur.com/6fY4nuc.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Insect", family="Lycaenidae", species="Boisduval's blue", sub_species="Mission Blue Butterfly", img_url="https://i.imgur.com/WneZCJ2.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    
    animals.append(Animal(group="Mammal", family="Cervidae", species="White Tailed Deer", sub_species="Hilton Head White Tailed Deer", img_url="https://i.imgur.com/kkgxalv.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    for animal in animals:
        db.session.add(animal)

    db.session.commit()


def undo_animals():
    db.session.execute('TRUNCATE animals RESTART IDENTITY CASCADE;')
    db.session.commit()
