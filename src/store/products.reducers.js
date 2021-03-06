import {FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE} from '../utils/constants'

const initialState = {
    products: [],
    loaded: false,
    loading: false,
    error: null,
    search: ''
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            }

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                loaded: true,
                error: null
            }

        case FETCH_PRODUCTS_FAILURE:
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

export default productsReducer;