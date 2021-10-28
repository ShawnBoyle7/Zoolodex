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

    const [animalResults, setAnimalResults] = useState([]) 
    const [regionResults, setRegionResults] = useState([]) 
    const [animalGroup, setAnimalGroup] = useState(false);
    const [animalFamily, setAnimalFamily] = useState(false);
    const [animalSpecies, setAnimalSpecies] = useState(false);
    const [animalSubSpecies, setAnimalSubSpecies] = useState(false);
    const [animalTag, setAnimalTag] = useState(false);
    const [animalRegion, setAnimalRegion] = useState(false);
    const [continent, setContinent] = useState(false);
    const [climate, setClimate] = useState(false);

    // Filters!!
    
    useEffect(() => {
        let animalsCopy = animals
        let regionsCopy = regions

        let animalFilter = false
        let regionFilter = false
        
        if (!animalGroup && !animalFamily && !animalSpecies && !animalSubSpecies && !animalTag && !animalRegion && !continent && !climate && !searchQuery) {
            document.querySelector(".fa-search").classList.remove("clickable")
            return setRenderSearchDropdown(false)
        } else {
            if (animalGroup) {
                animalsCopy.filter(animal => animal.group === animalGroup);
                animalFilter = true
            }
            
            if (animalFamily) {
                animalsCopy.filter(animal => animal.family === animalFamily);
                animalFilter = true
            }
            
            if (animalSpecies) {
                animalsCopy.filter(animal => animal.species === animalSpecies);
                animalFilter = true
            }
            
            if (animalSubSpecies) {
                animalsCopy.filter(animal => animal.group === animalSubSpecies);
                animalFilter = true
            }
            
            if (animalTag) {
                animalsCopy.filter(animal => animal.tag === animalTag);
                animalFilter = true
            }
            
            if (animalRegion) {
                animalsCopy.filter(animal => animal.regions.includes(animalRegion));
                animalFilter = true
            }
            
            if (continent) {
                regionsCopy.filter(region => region.continent === continent);
                regionFilter = true
            }
            
            if (climate) {
                regionsCopy.filter(region => region.climate === climate);
                regionFilter = true
            }

            if (searchQuery) {
                animalsCopy = animalsCopy.filter(animal => animal.subSpecies.toLowerCase().includes(searchQuery?.toLowerCase()))
                regionsCopy = regionsCopy.filter(region => region.name.toLowerCase().includes(searchQuery?.toLowerCase()))

                animalFilter = true
                regionFilter = true
            }

            if (animalFilter) {
                animalsCopy = animalsCopy.slice(0, 5)
                setAnimalResults(animalsCopy)
            }

            if (regionFilter) {
                regionsCopy = regionsCopy.slice(0, 5)
                setRegionResults(regionsCopy)
            }
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
                    <FilterModal 
                        showFilterModal={showFilterModal} 
                        setShowFilterModal={setShowFilterModal} 
                        animals={animals} 
                        regions={regions} 
                        animalGroup={animalGroup}
                        setAnimalGroup={setAnimalGroup}
                        setAnimalFamily={setAnimalFamily}
                        setAnimalSpecies={setAnimalSpecies}
                        setAnimalSubSpecies={setAnimalSubSpecies}
                        setAnimalTag={setAnimalTag}
                        setAnimalRegion={setAnimalRegion}
                        setContinent={setContinent}
                        setClimate={setClimate} 
                    />}
            </div>
        </>

    )
}

export default Search;