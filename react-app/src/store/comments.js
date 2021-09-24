import rfdc from "rfdc";
const clone = rfdc();

const LOAD_COMMENTS = "comments/LOAD_COMMENTS";
const ADD_COMMENT = "comments/ADD_COMMENT"

const loadComments = (data) => ({
    type: LOAD_COMMENTS,
    data
});

const addComment = (data) =>  ({
    type: ADD_COMMENT,
    data
});

export const getComments = () => async (dispatch) => {
    const response = await fetch("/api/comments/");

    if (response.ok) {
        const data = await response.json();
        dispatch(loadComments(data))
        return null;
    };
};

export const newComment = (content, userId, animalId, sightingId) => async (dispatch) => {
    const response = await fetch("/api/comments/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Why are we wrapping this in parentheses?
        // We're sending our data from the frontend user input to our API route as JSON for the HTTP request, which is why we stringify it to JSON from a JS object
        // The keys need to be python format because these keys will be checked by the form when the request is sent for validation, and then stored in the database in python format
        body: JSON.stringify({
            content: content,
            user_id: userId,
            animal_id: animalId,
            sighting_id: sightingId,
        })
    });

    if (response.ok) {
        // Log this and comment
        const data = await response.json();
        dispatch(addComment(data))
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

export const editComment = (content, commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addComment(data))
        return null;
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
    const stateCopy = clone(state)

    switch (action.type) {
        case LOAD_COMMENTS:
            action.data.comments.forEach(comment => {
                stateCopy[comment.id] = comment
            });
            return stateCopy;
        case ADD_COMMENT:
            stateCopy[action.data.id] = action.data
            return stateCopy;
        default:
            return state;
    }
};