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
    
    animals.append(Animal(group="Mammal", family="Felidae", species="Leopard", sub_species="Amur Leopard", img_url="https://i.imgur.com/0Aoibmo.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Mammal", family="Canidae", species="Wolf", sub_species="Arabian Wolf", img_url="https://i.imgur.com/12s5AVO.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Mammal", family="Felidae", species="Tiger", sub_species="Amur Tiger", img_url="https://i.imgur.com/gYPeIbS.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Mammal", family="Felidae", species="Lion", sub_species="Katanga Lion", img_url="https://i.imgur.com/QIvMHQG.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Aves", family="Accipitridae", species="Red-tailed Hawk", sub_species="Western Red-tailed Hawk", img_url="https://i.imgur.com/a8T8kfZ.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Aves", family="Strigidae", species="Spotted Owl", sub_species="Northern Spotted Owl", img_url="https://i.imgur.com/RK0S4u3.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Reptile", family="Testudinidae", species="Galapagos Tortoise", sub_species="Santiago Island Giant Tortoise", img_url="https://i.imgur.com/DdDRXTp.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Reptile", family="Boidae", species="Anaconda", sub_species="Green Anaconda", img_url="https://i.imgur.com/JppFYyR.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Amphibian", family="Ambystomatidae", species="Long-toed Salamander", sub_species="Santa Cruz Long-toed Salamander", img_url="https://i.imgur.com/1FI2vxG.png", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Insect", family="Lycaenidae", species="Boisduval's blue", sub_species="Mission Blue Butterfly", img_url="https://i.imgur.com/7B8B0Rb.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    animals.append(Animal(group="Ursidae", family="Ursidae", species="Brown Bear", sub_species="Kodiak Bear", img_url="https://i.imgur.com/EBM6Jck.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))
    
    animals.append(Animal(group="Mammal", family="Cervidae", species="White Tailed Deer", sub_species="Hilton Head White Tailed Deer", img_url="https://i.imgur.com/E2pu0Lc.jpg", origins=faker.paragraph(nb_sentences=180), traits=faker.paragraph(nb_sentences=180), ecosystem_influence=faker.paragraph(nb_sentences=180)))

    for animal in animals:
        db.session.add(animal)

    db.session.commit()


def undo_animals():
    db.session.execute('TRUNCATE animals RESTART IDENTITY CASCADE;')
    db.session.commit()
