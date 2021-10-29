import React from "react";
import { Modal } from "../../context/Modal";
import Filter from "../Filter";

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
    setClimate }) {
    return (
        <>
            {showFilterModal && (
            <Modal onClose={() => setShowFilterModal(false)}>
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
            </Modal>
            )}
        </>
    )
}

export default FilterModal;