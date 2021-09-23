// Action type string literal
const LOAD_ANIMALS = "animals/LOAD_ANIMALS";

// Action creator
const loadAnimals = (data) => ({
    // Action type
    type: LOAD_ANIMALS,
    // Payload
    data
});

// Thunk
export const getAnimals = () => async (dispatch) => {
    // Send data to API route and receive it back in the response variable
    const response = await fetch("/api/animals");

    // If the response returned correctly
    if (response.ok) {
        // 
        const data = await response.json();
        dispatch(loadAnimals(data))
        return null;
    }
};

// Reducer
const initialState = {}

export default function reducer(state = initialState, action) {
    // Don't copy the original state because you want to rewind time
    const stateCopy = {...state};
    switch (action.type) {
        case LOAD_ANIMALS:
            // 
            action.data.animals.forEach(animal => {
                stateCopy[animal.id] = animal
            });
            return stateCopy;
        default:
            return state;
    }
}