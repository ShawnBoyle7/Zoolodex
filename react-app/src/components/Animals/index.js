import React from "react";
import { useSelector } from "react-redux";
import AnimalTile from "../AnimalTile";
import { Link } from "react-router-dom";

const Animals = () => {
    const animals = Object.values(useSelector(state => state.animals))

    return (
        <>  
            <div className="background-image-div"><img src="https://thimages.co.uk/wildfoot-page/wildfootpage-154/page-image-52599.jpg" alt="background"/></div>
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