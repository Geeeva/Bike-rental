import {
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from '../utils/constants'

const initialState = {
    categories: [],
    loaded: false,
    loading: false,
    error: null,
};

const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES_START:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            }

        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                loading: false,
                loaded: true,
                error: null
            }

        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            }

        default:
            return state;
    }
};

export default categoriesReducer;