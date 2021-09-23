import rfdc from "rfdc";
const clone = rfdc()

const LOAD_ANIMAL_TAGS = "animal_tags/LOAD_ANIMAL_TAGS";

const loadAnimalTags = (data) => ({
    type: LOAD_ANIMAL_TAGS,
    data
});

export const getAnimalTags = () => async (dispatch) => {
    const response = await fetch("/api/animal_tags/");

    if (response.ok) {
        const data = await response.json();
        dispatch(loadAnimalTags(data));
        return null;
    };
};

const initialState = {};

export default function reducer(state = initialState, action) {
    const stateCopy = clone(state)

    switch (action.type) {
        case LOAD_ANIMAL_TAGS:
            action.data.animal_tags.forEach(animal_tag => {
                stateCopy[animal_tag.id] = animal_tag
            });
            return stateCopy;
        default:
            return state;
    }
};