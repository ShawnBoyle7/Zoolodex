import React from "react"
import Select from "react-select"

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

    // const groupObj = groupArr.map(group => ({value: group, label: group}))

    return (
        <>
            <h1>Filter!</h1>
            <h2>Animals</h2>
            <div className="animal-filter">
                <select value={animalGroup} onChange={(e => setAnimalGroup(e.target.value))} >
                    {groupArr.map(group => <option value={group}> {group} </option>)}
                </select>
                {/* <Select 
                    options={groupObj} 
                    // value={animalGroup}
                    onChange={(e) => (console.log(e?.target.value))}
                /> */}
            </div>
        </>
    )
}

export default Filter;