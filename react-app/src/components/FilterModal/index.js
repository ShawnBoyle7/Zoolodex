import React from "react";
import { Modal } from "../../context/Modal";
import Filter from "../Filter";
// import SearchDropdown from "../SearchDropdown";

function FilterModal({
    showFilterModal,
    setShowFilterModal,
    animals,
    regions,
    animalGroup,
    setAnimalGroup,
    setAnimalFamily,
    setAnimalSpecies,
    setAnimalSubSpecies,
    setAnimalTag,
    setAnimalRegion,
    setContinent,
    setClimate,

    // searchQuery, setSearchQuery, setRenderSearchDropdown, animalResults, regionResults
}){
    return (
        <>
            {showFilterModal && (
            <>
                <Modal className="filter-modal" onClose={() => setShowFilterModal(false)}>
                    <Filter                         
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
                    />
                    {/* <SearchDropdown 
                        searchQuery={searchQuery} 
                        setSearchQuery={setSearchQuery} 
                        setRenderSearchDropdown={setRenderSearchDropdown} 
                        animalResults={animalResults} 
                        regionResults={regionResults} 
                    /> */}
                </Modal>
            </>
            )}
        </>
    )
}

export default FilterModal;