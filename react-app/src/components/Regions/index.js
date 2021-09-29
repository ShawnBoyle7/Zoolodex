import React from "react";
import { useSelector } from "react-redux";
import RegionTile from "../RegionTile";
import { Link } from "react-router-dom";

const Regions = () => {
    const regions = Object.values(useSelector(state => state.regions))

    return (
        <>  
            <div className="background-image"><img src="https://images.wallpaperscraft.com/image/single/lake_mountains_trees_129959_3840x2400.jpg"/></div>
            <div className="page-content">
                    <div className="gallery-page">
                        {regions.map(region =>
                            <div className="gallery-tile">
                                <Link to={`/regions/${region.id}`} key={region.id}>
                                    <RegionTile region={region}/>
                                </Link>
                            </div>
                        )}
                    </div>
            </div>

        </>
    )
}

export default Regions