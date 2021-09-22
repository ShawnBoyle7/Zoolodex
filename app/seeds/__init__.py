from flask.cli import AppGroup
from .users import seed_users, undo_users
from .animal_tags import seed_animal_tags, undo_animal_tags


seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_animal_tags()


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_animal_tags()

