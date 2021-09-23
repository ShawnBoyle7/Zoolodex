import rfdc from "rfdc";
const clone = rfdc();

const LOAD_COMMENTS = "comments/LOAD_COMMENTS";

const loadComments = (data) => ({
    type: LOAD_COMMENTS,
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

const initialState = {}

export default function reducer(state = initialState, action) {
    const stateCopy = clone(state)

    switch (action.type) {
        case LOAD_COMMENTS:
            action.data.comments.forEach(comment => {
                stateCopy[comment.id] = comment
            });
            return stateCopy;
        default:
            return state;
    }
};