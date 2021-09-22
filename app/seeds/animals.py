from app.models import db, Animal
from faker import Faker

faker = Faker()

def seed_animals():
    article_template = '{{"origins": "{0}",  "traits": "{1}", "ecosystemInfluence": "{2}" }}'

    origins = faker.text(500)
    traits = faker.text(500)
    ecosystem_influence = faker.text(500)

    amur_leopard = Animal(
      group="mammal",
      family="felidae",
      species="leopard",
      sub_species="amur_leopard",
      img_url="https://untamedanimals.com/wp-content/uploads/2021/01/Do-Leopards-Live-In-The-Jungle.jpg",
      article= article_template.format(origins, traits, ecosystem_influence)
    )

    db.session.add(amur_leopard)

    db.session.commit()


def undo_animals():
    db.session.execute('TRUNCATE animals RESTART IDENTITY CASCADE;')
    db.session.commit()
