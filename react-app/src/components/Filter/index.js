import React from "react"

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

    animals.map(animal => {
        groups.add(animal.group)
    });

    const groupArr = Array.from(groups)

    return (
        <>
            <h1>Filter!</h1>
            <h2>Animals</h2>
            <div className="animal-filter">
                <select value={animalGroup} onChange={e => setAnimalGroup(e.target.value)}>
                    {groupArr.map(group => {
                        <option> TEST </option>
                        console.log(group)
                    })}
                </select>
            </div>
        </>
    )
}

export default Filter;