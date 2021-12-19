import React from "react";
import "./RegionTile.css"

const RegionTile = ({ region }) => {

    return (
        <div className="region-div">
            <div className="gallery-image-div">
                <img className="gallery-image" src={region.imgUrl} alt="region"/>
                {/* <div className="gallery-image" style={{ backgroundImage: `url(${region?.imgUrl})` }}></div> */}
            </div>

            <div className="tile-name">
                <h2>{region.name}</h2>
            </div>
        </div>
    )
}

export default RegionTile