import React from "react";

const RegionTile = ({ region }) => {

    return (
        <div className="region-div">
            <div className="region-tile-image">
                <img src={region.imgUrl1} alt="region"/>
            </div>
            <div className="region-tile-name">
                <h2>{region.name}</h2>
            </div>
        </div>
    )
}

export default RegionTile