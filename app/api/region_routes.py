from flask import Blueprint
from app.models import Region

region_routes = Blueprint("regions", __name__)

@region_routes.route("/")
def regions():
    regions = Region.query.all()

    return {"regions": [region.to_dict() for region in regions]}