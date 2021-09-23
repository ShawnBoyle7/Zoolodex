import rfdc from "rfdc";
const clone = rfdc();

const LOAD_SIGHTINGS = "suggestions/LOAD_SIGHTINGS";

const loadSightings = (data) => ({
    type: LOAD_SIGHTINGS,
    data
}); 

export const getSightings = () => async (dispatch) => {
    const response = await fetch("/api/sightings/");

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSightings(data))
        return null;
    };
};

const initialState = {}

export default function reducer(state = initialState, action) {
    const stateCopy = clone(state)

    switch (action.type) {
        case LOAD_SIGHTINGS:
            action.data.sightings.forEach(sighting => {
                stateCopy[sighting.id] = sighting
            });
            return stateCopy;
        default:
            return state;
    }
};