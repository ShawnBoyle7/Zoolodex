import React from "react";
import { useSelector } from "react-redux";
import AnimalTile from "../AnimalTile";
import { Link } from "react-router-dom";
import './Animal.css'

const Animals = () => {
    const animals = Object.values(useSelector(state => state.animals))

    return (
        <>  
            <div className="background-image"><img src="https://images.wallpaperscraft.com/image/single/lake_mountains_trees_129959_3840x2400.jpg"/></div>
            <div className="page-content">
                    <div className="gallery-page">
                        {animals.map(animal =>
                            <div className="gallery-tile">
                                <Link to={`/animals/${animal.id}`} key={animal.id}>
                                    <AnimalTile animal={animal}/>
                                </Link>
                            </div>
                        )}
                    </div>
            </div>

        </>
    )
}

export default Animals