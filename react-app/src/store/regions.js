import rfdc from "rfdc";
const clone = rfdc()

const LOAD_REGIONS = "regions/LOAD_REGIONS";

const loadRegions = (data) => ({
    type: LOAD_REGIONS,
    data
});

export const getRegions = () => async (dispatch) => {
    const response = await fetch("/api/regions/");

    if (response.ok) {
        const data = await response.json();
        dispatch(loadRegions(data))
        return null;
    }
};

const initialState = {};

export default function reducer(state = initialState, action) {
    const stateCopy = clone(state)

    switch (action.type) {
        case LOAD_REGIONS:
            action.data.regions.forEach(region => {
                stateCopy[region.id] = region
            });
            return stateCopy;
        default:
            return state;
    }
} 