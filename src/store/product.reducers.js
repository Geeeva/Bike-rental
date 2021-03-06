import {SEARCH_PRODUCT} from '../utils/constants';

const initialState = {
    search: ''
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {

    case SEARCH_PRODUCT:
    return {
        ...state,
        search: action.payload
    }

    default:
    return state;
    }
};

export default productReducer;