import rfdc from "rfdc";
const clone = rfdc();

const LOAD_SUGGESTIONS = "suggestions/LOAD_SUGGESTIONS";

const loadSuggestions = (data) => ({
    type: LOAD_SUGGESTIONS,
    data
}); 

export const getSuggestions = () => async (dispatch) => {
    const response = await fetch("/api/suggestions/");

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSuggestions(data))
        return null;
    };
};

const initialState = {}

export default function reducer(state = initialState, action) {
    const stateCopy = clone(state)

    switch (action.type) {
        case LOAD_SUGGESTIONS:
            action.data.suggestions.forEach(suggestion => {
                stateCopy[suggestion.id] = suggestion
            });
            return stateCopy;
        default:
            return state;
    }
};