from flask.cli import AppGroup
from .users import seed_users, undo_users
from .animal_tags import seed_animal_tags, undo_animal_tags
from .animals import seed_animals, undo_animals
from .animals_tags_joins import seed_animals_tags_joins, undo_animals_tags_joins


seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_animal_tags()
    seed_animals()
    seed_animals_tags_joins()


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_animal_tags()
    undo_animals()
    undo_animals_tags_joins()

