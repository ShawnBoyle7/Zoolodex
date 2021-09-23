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
    const response = await fetch("/api/animals");

    if (response.ok) {
        const data = response.json()

        dispatch(loadAnimals(data))
        return null;
    }
};

// Reducer
const initialState = {}

export default function reducer(state = initialState, action) {
    const stateCopy = {...state};
    switch (action.type) {
        case LOAD_ANIMALS:
            action.data.animals.forEach(animal => {
                stateCopy[animal.id] = animal
            });
            return stateCopy;
        default:
            return state;
    }
}