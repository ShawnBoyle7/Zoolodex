import React from "react";
import { useSelector } from "react-redux";
import AnimalTile from "../AnimalTile";
import { Link } from "react-router-dom";

const Animals = () => {
    const animals = Object.values(useSelector(state => state.animals))

    return (
        <>  
            <div className="background-image"><img src="https://images.wallpaperscraft.com/image/single/lake_mountains_trees_129959_3840x2400.jpg" alt="background"/></div>
                    <div className="gallery-page">
                        {animals.map(animal =>
                            <div className="gallery-tile" key={animal.id}>
                                <Link to={`/animals/${animal.id}`} >
                                    <AnimalTile animal={animal}/>
                                </Link>
                            </div>
                        )}
                    </div>
        </>
    )
}

export default Animals