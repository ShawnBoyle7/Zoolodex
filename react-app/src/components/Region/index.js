import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './Region.css'

const Region = () => {
    const regions = Object.values(useSelector(state => state.regions))
    const { regionId } = useParams();
    const region = regions.find(region => region.id === +regionId)

    return (
        <>
            <div className="background-image-div"><img src="https://images.wallpaperscraft.com/image/single/lake_mountains_trees_129959_3840x2400.jpg" alt="background"/></div>
                <div className="region-page">
                    <h1>{region.name}</h1>
                </div>
        </>
    )
}

export default Region