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
                <div>
                    {regions.map(region =>
                        <Link to={`/regions/${region.id}`} key={region.id}>
                            <RegionTile region={region}/>
                        </Link>
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