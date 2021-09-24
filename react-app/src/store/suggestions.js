import rfdc from "rfdc";
const clone = rfdc();

const LOAD_SUGGESTIONS = "suggestions/LOAD_SUGGESTIONS";
const ADD_SUGGESTION = "suggestions/ADD_SUGGESTION";
const REMOVE_SUGGESTION = "suggestions/REMOVE_SUGGESTION"

const loadSuggestions = (data) => ({
    type: LOAD_SUGGESTIONS,
    data
});

const addSuggestion = (data) => ({
    type: ADD_SUGGESTION,
    data
});

const removeSuggestion = (suggestionId) => ({
    type: REMOVE_SUGGESTION,
    suggestionId
});

export const getSuggestions = () => async (dispatch) => {
    const response = await fetch("/api/suggestions/");

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSuggestions(data))
        return null;
    };
};

export const newSuggestion = (type, title, description, imgFile, userId) => async (dispatch) => {
    // Need to research this form data class
    const form = new FormData()
    form.append("type", type)
    form.append("title", title)
    form.append("description", description)
    form.append("img_file", imgFile)
    form.append("user_id", userId)

    // I don't need headers I guess? Why?
    const response = await fetch("/api/suggestions/", {
        method: "POST",
        body: form
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addSuggestion(data))
        return null;

    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."]
    }
}

export const editSuggestion = (type, title, description, imgFile, suggestionId) => async (dispatch) => {
    const form = new FormData()
    form.append("type", type)
    form.append("title", title)
    form.append("description", description)
    form.append("img_file", imgFile)
    form.append("suggestion_id", suggestionId)

    const response = await fetch(`/api/suggestions/${suggestionId}`, {
        method: "PUT",
        body: form
    }); 

    if (response.ok) {
        const data = await response.json();
        dispatch(addSuggestion(data))
        return null;

    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors
        };
    } else {
        return ["An error occurred. Please try again."]
    };
}

export const deleteSuggestion = (suggestionId) => async (dispatch) => {
    const response = await fetch(`/api/suggestions/${suggestionId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(removeSuggestion(suggestionId))
        return null;
    }
};

const initialState = {}

export default function reducer(state = initialState, action) {
    let stateCopy = clone(state)

    switch (action.type) {
        case LOAD_SUGGESTIONS:
            action.data.suggestions.forEach(suggestion => {
                stateCopy[suggestion.id] = suggestion
            });
            return stateCopy;
        case ADD_SUGGESTION:
            // Console log this to understand then re-document it
            stateCopy[action.data.id] = action.data;
            return stateCopy;
        case REMOVE_SUGGESTION:
            delete stateCopy[action.suggestionId]
            return stateCopy;
        default:
            return state;
    }
};