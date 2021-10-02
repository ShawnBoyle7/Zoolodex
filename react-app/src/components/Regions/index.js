import React from "react";
import { useSelector } from "react-redux";
import RegionTile from "../RegionTile";
import { Link } from "react-router-dom";

const Regions = () => {
    const regions = Object.values(useSelector(state => state.regions))

    return (
        <>  
            <div className="background-image-div"><img src="https://friendsoftheinyo.org/wp-content/uploads/2016/03/Little-Lakes-Valley-by-Jan-Arendtsz_header.jpg" alt="background"/></div>
                <div className="gallery-page">
                    {regions.map(region =>
                        <div className="gallery-tile" key={region.id}>
                            <Link to={`/regions/${region.id}`}>
                                <RegionTile region={region}/>
                            </Link>
                        </div>
                    )}
                </div>

        </>
    )
}

export default Regions