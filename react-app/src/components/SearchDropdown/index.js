import React from "react"
import { Link } from "react-router-dom";
import "./SearchDropdown.css"

const SearchDropdown = ({ searchQuery, setSearchQuery, setRenderSearchDropdown, animalResults, regionResults  }) => {
    document.querySelector("html").addEventListener("click", () => {
        setRenderSearchDropdown(false)
    });

    const handleClick = () => {
        setRenderSearchDropdown(false)
        setSearchQuery("")
    }

    const formatResult = (result) => {
        const index = result?.toLowerCase().indexOf(searchQuery?.toLowerCase())
        const length = searchQuery?.length

        const preMatch = result?.slice(0, index)

        const match = result?.slice(index, index + length)

        const postMatch = result?.slice(index + length)

        return <span className="search-result">{preMatch}<span className="match">{match}</span>{postMatch}</span>
    }

    return (
        <>
            <div className="search-dropdown">
                <div className="search-animals">
                    <h3>Animals</h3>
                    <div className="search-animals-results">
                        {animalResults.length ?
                            animalResults.map(animal =>
                                <Link key={animal.id} to={`/animals/${animal.id}`} onClick={handleClick}>
                                    <div className='result-div'>
                                        {formatResult(animal.subSpecies)}
                                    </div>
                                </Link>
                            )
                        :
                        <div className='result-div'>
                                No animals found
                        </div>}
                    </div>
                </div>

                <div className="search-regions">
                    <h3>Regions</h3>
                    <div className="search-regions-results">
                        {regionResults.length ?
                            regionResults.map(region =>
                                <Link key={region.id} to={`/regions/${region.id}`} onClick={handleClick}>
                                    <div className='result-div'>
                                        {formatResult(region.name)}
                                    </div>
                                </Link>
                            )
                        :
                        <div className='result-div'>
                            No regions found
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchDropdown;