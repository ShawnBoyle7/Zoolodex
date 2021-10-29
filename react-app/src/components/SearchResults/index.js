import React from "react"
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import AnimalTile from "../AnimalTile"
import RegionTile from "../RegionTile"
import "./SearchResults.css"

const SearchResults = () => {
    const location = useLocation().search
    const searchQuery = new URLSearchParams(location).get("q")

    const animals = Object.values(useSelector(state => state.animals))
    const regions = Object.values(useSelector(state => state.regions))

    const animalResults = animals?.filter(animal => animal.subSpecies.toLowerCase().includes(searchQuery?.toLowerCase()))
    const regionResults = regions?.filter(region => region.name.toLowerCase().includes(searchQuery?.toLowerCase()))

    const numResults = animalResults.length + regionResults.length

    return (
        <>
            <div className="background-image-div"><img src="https://i.imgur.com/YIUHNHW.jpg" alt="background"/></div>
            {numResults === 1 ? 
                <h1 className="search-results-page-header"> Found {`${numResults} result for '${searchQuery}'`}</h1> 
                : 
                <h1 className="search-results-page-header"> Found {`${numResults} results for '${searchQuery}'`}</h1>}

            <h2 className='results-header'>Animals</h2>
            <h2 className='results-header'>Regions</h2>
            <div className="gallery-page">
                {/* {animalResults.length > 0 &&  */}
                    {/* <div className="search-animal-results"> */}
                        {animalResults.map(animal =>
                            <div className="gallery-tile" key={animal.id}>
                                <Link to={`/animals/${animal.id}`} >
                                    <AnimalTile animal={animal}/>
                                </Link>
                            </div>
                            )}
                    {/* </div>} */}

                {/* {regionResults.length > 0 && 
                    <div className="search-region-results">
                        <h2 className='results-header'>Regions</h2>
                        {regionResults.map(region =>
                            <div className="gallery-tile" key={region.id}>
                                <Link to={`/regions/${region.id}`}>
                                    <RegionTile region={region}/>
                                </Link>
                            </div>    
                            )}
                    </div>} */}
            </div>
        </>
    )
};

export default SearchResults;