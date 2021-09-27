import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Region from "../Region";
import RegionTile from "../RegionTile";
import { Link } from "react-router-dom";

const Regions = () => {
    const regions = Object.values(useSelector(state => state.regions))

    return (
        <>  
            <div className="background-image"><img src="https://i.imgur.com/EgUQclC.jpg"/></div>
            <div className="page-content">
                <Route exact path="/regions">
                    <div className="gallery-page">
                        {regions.map(region =>
                            <div className="gallery-tile">
                                <Link to={`/regions/${region.id}`} key={region.id}>
                                    <RegionTile region={region}/>
                                </Link>
                            </div>
                        )}
                    </div>
                </Route>
            </div>

            <Route path="/regions/:regionId">
                <Region/>
            </Route>
        </>
    )
}

export default Regions