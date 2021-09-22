from flask.cli import AppGroup
from .users import seed_users, undo_users
from .animals import seed_animals, undo_animals
from .animal_tags import seed_animal_tags, undo_animal_tags
from .regions import seed_regions, undo_regions
from .sightings import seed_sightings, undo_sightings
from .comments import seed_comments, undo_comments
from .animals_tags_joins import seed_animals_tags_joins, undo_animals_tags_joins
from .animals_regions_joins import seed_animals_regions_joins, undo_animals_regions_joins


seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_animals()
    seed_animal_tags()
    seed_regions()
    seed_sightings()
    seed_comments()
    seed_animals_tags_joins()
    seed_animals_regions_joins()


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_animals()
    undo_animal_tags()
    undo_regions()
    undo_sightings()
    undo_comments()
    undo_animals_tags_joins()
    undo_animals_regions_joins()

