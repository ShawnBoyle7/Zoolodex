import rfdc from "rfdc";
const clone = rfdc()

// Action type string literal
const LOAD_ANIMALS = "animals/LOAD_ANIMALS";

// Action creator returns an action and sends the type & payload to our reducer
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
        // Response is what returned from the API route, which we save into a data variable as a javascript object from the JSON body
        const data = await response.json();
        // Dispatching data to the loadAnimals action creator to return that data as an action with a type/payload to our reducer
        dispatch(loadAnimals(data))
        // Return to stop hanging?
        return null;
    }
};

// Reducer
const initialState = {}

// Reducer takes in a default object as the state, and an action which it retrieves from any returned action creator
export default function reducer(state = initialState, action) {
    // Don't copy the original state because you want to be able to rewind the state for debugging
    const stateCopy = clone(state)
    // Switching between each action's type in the reducer to decide which case to handle
    switch (action.type) {
        case LOAD_ANIMALS:
            // The data from our backend API returns a list of what we returned from the route. 
            action.data.animals.forEach(animal => {
                // Assign each animal to a key value pair of the animal ID and the animal object in our state
                stateCopy[animal.id] = animal
            });
            return stateCopy;
        default:
            return state;
    }
}