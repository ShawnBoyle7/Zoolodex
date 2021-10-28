import React from "react";
import "./RegionTile.css"

const RegionTile = ({ region }) => {

    return (
        <div className="region-div">
            <div className="region-tile-image">
                <img src={region.imgUrl} alt="region"/>
            </div>

            <div className="tile-name">
                <h2>{region.name}</h2>
            </div>
        </div>
    )
}

export default RegionTile