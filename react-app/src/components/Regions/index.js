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

            <Route path="/regions/:regionId">
                <Region/>
            </Route>
        </>
    )
}

export default Regions