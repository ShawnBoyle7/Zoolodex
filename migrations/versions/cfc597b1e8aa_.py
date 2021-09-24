"""empty message

Revision ID: cfc597b1e8aa
Revises: 
Create Date: 2021-09-24 01:46:56.618796

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cfc597b1e8aa'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('animal_tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('animals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('group', sa.String(), nullable=False),
    sa.Column('family', sa.String(), nullable=False),
    sa.Column('species', sa.String(), nullable=False),
    sa.Column('sub_species', sa.String(), nullable=False),
    sa.Column('img_url', sa.String(), nullable=False),
    sa.Column('origins', sa.String(), nullable=False),
    sa.Column('traits', sa.String(), nullable=False),
    sa.Column('ecosystem_influence', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('regions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('climate', sa.String(), nullable=False),
    sa.Column('continent', sa.String(), nullable=False),
    sa.Column('img_url_1', sa.String(), nullable=True),
    sa.Column('img_url_2', sa.String(), nullable=True),
    sa.Column('img_url_3', sa.String(), nullable=True),
    sa.Column('img_url_4', sa.String(), nullable=True),
    sa.Column('img_url_5', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('img_url', sa.String(length=255), nullable=True),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('animals_regions_joins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('animal_id', sa.Integer(), nullable=True),
    sa.Column('region_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['animal_id'], ['animals.id'], ),
    sa.ForeignKeyConstraint(['region_id'], ['regions.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('animals_tags_joins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('animal_id', sa.Integer(), nullable=True),
    sa.Column('animal_tag_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['animal_id'], ['animals.id'], ),
    sa.ForeignKeyConstraint(['animal_tag_id'], ['animal_tags.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sightings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('sighting_latitude', sa.Float(), nullable=False),
    sa.Column('sighting_longitude', sa.Float(), nullable=False),
    sa.Column('sighting_date', sa.DateTime(), nullable=True),
    sa.Column('img_url_1', sa.String(), nullable=True),
    sa.Column('img_url_2', sa.String(), nullable=True),
    sa.Column('img_url_3', sa.String(), nullable=True),
    sa.Column('img_url_4', sa.String(), nullable=True),
    sa.Column('img_url_5', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('animal_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['animal_id'], ['animals.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('suggestions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('img_url', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=1000), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('animal_id', sa.Integer(), nullable=True),
    sa.Column('sighting_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['animal_id'], ['animals.id'], ),
    sa.ForeignKeyConstraint(['sighting_id'], ['sightings.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('suggestions')
    op.drop_table('sightings')
    op.drop_table('animals_tags_joins')
    op.drop_table('animals_regions_joins')
    op.drop_table('users')
    op.drop_table('regions')
    op.drop_table('animals')
    op.drop_table('animal_tags')
    # ### end Alembic commands ###