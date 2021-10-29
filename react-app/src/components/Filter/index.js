import React, { useState } from "react"
import "./Filter.css"

const Filter = ({
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
    setClimate }) => {

    const groups = new Set()
    animals.forEach(animal => {
        groups.add(animal.group)
    });
    let groupArr = Array.from(groups)

    const [showAnimals, setShowAnimals] = useState(true)
    const [showRegions, setShowRegions] = useState(false)

    const animalClick = () => {
        setShowAnimals(true)
        setShowRegions(false)
    };

    const regionClick = () => {
        setShowAnimals(false)
        setShowRegions(true)
    };

    return (
        <>
            <div className="filter-div">
                <div className="filter-top-toolbar">
                    <i class="far fa-window-close"></i>
                    Filters
                    <button>Reset</button>
                </div>
                <div className="filter-conditional-buttons-div">
                        <button className={`${showAnimals ? "selected" : ""}`} onClick={animalClick}>Animal Filtering</button>
                        <button className={`${showRegions ? "selected" : ""}`} onClick={regionClick}>Region Filtering</button>
                </div>
                {showAnimals && 
                    <>
                        <h2>Animals</h2>
                        <div className="animal-filters-div">
                            <select value={animalGroup} onChange={(e => setAnimalGroup(e.target.value))} >
                                {groupArr.map(group => <option value={group}> {group} </option>)}
                            </select>
                        </div>
                    </>
                }

                {showRegions && 
                    <>
                        <h2>Regions</h2>
                        <div className="animal-filters-div">
                            <select value={animalGroup} onChange={(e => setAnimalGroup(e.target.value))} >
                                {groupArr.map(group => <option value={group}> {group} </option>)}
                            </select>
                        </div>
                    </>
                }

                <div className="filter-bottom-toolbar">
                    <button>Cancel</button>
                    <button>Apply</button>
                </div>
            </div>
        </>
    )
}

export default Filter;