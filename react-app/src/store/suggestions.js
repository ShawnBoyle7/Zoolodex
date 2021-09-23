import rfdc from "rfdc";
const clone = rfdc();

const LOAD_SUGGESTIONS = "suggestions/LOAD_SUGGESTIONS";
const ADD_SUGGESTION = "suggestions/ADD_SUGGESTION";

const loadSuggestions = (data) => ({
    type: LOAD_SUGGESTIONS,
    data
});

const addSuggestion = (data) => ({
    type: ADD_SUGGESTION,
    data
})

export const getSuggestions = () => async (dispatch) => {
    const response = await fetch("/api/suggestions/");

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSuggestions(data))
        return null;
    };
};

export const newSuggestion = (type, title, description, imgUrl, userId) => async (dispatch) => {
    const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Why are we wrapping this in parentheses?
        // We're sending our data from the frontend user input to our API route as JSON for the HTTP request, which is why we stringify it to JSON from a JS object
        // The keys need to be python format because these keys will be checked by the form when the request is sent for validation, and then stored in the database in python format
        body: JSON.stringify({
            type: type,
            title: title,
            description: description,
            img_url: imgUrl,
            user_id: userId
        })
    });

    if (response.ok) {
        const data = await response.json();
        console.log("DATA LOG", data)
        dispatch(addSuggestion(data))
        return null;
      // If there was an error from the API route (the server, hence 500), we get the data and return any errors to our frontend where we dispatched this thunk.
      // If no errors, then just return that there was a server error.  
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."]
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
        default:
            return state;
    }
};