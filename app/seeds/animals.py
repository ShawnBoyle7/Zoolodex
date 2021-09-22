from app.models import db, Animal


def seed_animals():
    amur_leopard = Animal(
      group="mammal",
      family="felidae",
      species="leopard",
      sub_species="amur_leopard"
      article='{
        "origins":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim odio ac sollicitudin tincidunt. Vivamus eleifend elit est, ut aliquam metus ultricies vitae. Maecenas tempus mollis facilisis. Quisque semper sem a condimentum bibendum. Quisque non augue non mi placerat elementum sit amet et eros. Nunc in dapibus nisl. Cras dignissim quis odio ac fringilla. Vivamus hendrerit justo vitae odio tincidunt, at bibendum urna consequat. Phasellus dapibus arcu vel lacus hendrerit auctor.",  
        "traits":"Sed efficitur est quis laoreet dignissim. Aliquam pulvinar odio ligula. Suspendisse ut nibh finibus, imperdiet urna et, aliquam libero. Cras molestie aliquet mollis. Integer varius accumsan velit sit amet posuere. Aliquam lorem justo, imperdiet sed lectus a, laoreet pellentesque purus. Sed finibus euismod gravida. Vestibulum ultrices magna nec nisi condimentum, eget faucibus neque tempus.",
        "ecosystemInfluence":"Vivamus ornare et velit ut scelerisque. Suspendisse vitae venenatis velit, sed ornare risus. In efficitur vehicula turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Suspendisse et pretium sem, sed porta felis. Etiam vehicula eleifend lectus non blandit. Quisque eleifend ultricies neque, ut porttitor ex pretium in. In erat dolor, tincidunt et laoreet a, mollis id tortor. Sed et mollis quam, tempor volutpat tortor. Donec vehicula odio vel elementum imperdiet. Nam vehicula magna et libero iaculis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }'
    )

    db.session.add(leopard)

    db.session.commit()


def undo_animals():
    db.session.execute('TRUNCATE animals RESTART IDENTITY CASCADE;')
    db.session.commit()
