import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchDropdown from '../SearchDropdown';
import FilterModal from '../FilterModal';

const Search = ({}) => {
    const history = useHistory();

    const animals = Object.values(useSelector(state => state.animals))
    const regions = Object.values(useSelector(state => state.regions))
    
    const [searchQuery, setSearchQuery] = useState("");
    const [renderSearchDropdown, setRenderSearchDropdown] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false)
    const [animalGroup, setAnimalGroup] = useState(false);
    const [animalFamily, setAnimalFamily] = useState(false);
    const [animalSpecies, setAnimalSpecies] = useState(false);
    const [animalSubSpecies, setanimalSubSpecies] = useState(false);
    const [animalTag, setAnimalTag] = useState(false);
    const [animalRegion, setAnimalRegion] = useState(false);
    const [continent, setContinent] = useState(false);
    const [climate, setClimate] = useState(false);

    // Filters!!
    const animalResults = animals?.filter(animal => animal.subSpecies.toLowerCase().includes(searchQuery?.toLowerCase())).slice(0,5)
    const regionResults = regions?.filter(region => region.name.toLowerCase().includes(searchQuery?.toLowerCase())).slice(0,5)
    
    useEffect(() => {
        if (!animalGroup && !animalFamily && !animalSpecies && !animalSubSpecies && !animalTag && !animalRegion && !continent && !climate && !searchQuery) {
            document.querySelector(".fa-search").classList.remove("clickable")
            return setRenderSearchDropdown(false)
        }

        setRenderSearchDropdown(true)
        document.querySelector(".fa-search").classList.add("clickable")

    }, [animalGroup, animalFamily, animalSpecies, animalSubSpecies, animalTag, animalRegion, continent, climate, searchQuery]);
    
    // Re-render dropdown on click with query
    const handleClick = () => {
        if (searchQuery.length) {
            setRenderSearchDropdown(true)
        }
    }
    
    // Redirect to search page routed by query
    const handleSearch = (e) => {
        e.preventDefault()
        
        if (!searchQuery.length) return
        
        setRenderSearchDropdown(false)
        
        const query = searchQuery
        setSearchQuery("")
        
        history.push(`/search?q=${query}`)
    }
    
    const renderModal = () => {
        setShowFilterModal(true)
    };


    return (
        <>
            <div className="search-div" onClick={e => e.stopPropagation()}>
                <form className="search-form" onSubmit={handleSearch}>
                    <i className="fas fa-search" onClick={handleSearch}></i>
                    <input 
                    placeholder='Explore'
                    onClick={handleClick}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    />

                    {renderSearchDropdown &&
                        <SearchDropdown searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRenderSearchDropdown={setRenderSearchDropdown} animalResults={animalResults} regionResults={regionResults}/>
                    }
                </form>

                <i className="fas fa-filter" onClick={renderModal}></i>
                {showFilterModal && 
                    <FilterModal showFilterModal={showFilterModal} setShowFilterModal={setShowFilterModal}/>}
            </div>
        </>

    )
}

export default Search;