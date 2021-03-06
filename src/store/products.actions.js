//import {fetchProducts as fetchProductsApi} from '../services/fetchProducts';
import axios from "axios";
import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_PRODUCT_TO_BASKET,
    SEARCH_PRODUCT,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    REMOVE_PRODUCT_FROM_BASKET,
    CLEAN_BASKET,
    INCREASE_DAYS_TO_RENT,
    DECREASE_DAYS_TO_RENT,
    ON_QUANTITY_CHANGE
} from '../utils/constants';

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_START });
        //fetchProductsApi()
        axios.get('./data/products.json')
            .then((res) => {
                dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
            })
            .catch((error) => {
                dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
            })
    }
}

export const addProductToBasket = id => dispatch => {
    dispatch({type: ADD_PRODUCT_TO_BASKET, payload: id});
}

export const removeProductFromBasket = id => dispatch => {
    dispatch({type: REMOVE_PRODUCT_FROM_BASKET, payload: id});
}

export const searchProduct = text => dispatch => {
    dispatch({type: SEARCH_PRODUCT, payload: text})
}

export const fetchCategories = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CATEGORIES_START });
        //fetchCategoriesApi()
        axios.get('./data/categories.json')
            .then((res) => {
                dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: res.data });
            })
            .catch((error) => {
                dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
            })
    }
}

export const cleanBasket = () => dispatch => {
    dispatch({type: CLEAN_BASKET})
}

export const increaseDaysToRent = id => dispatch => {
    dispatch({type: INCREASE_DAYS_TO_RENT, payload:id})
}

export const decreaseDaysToRent = id => dispatch => {
    dispatch({type: DECREASE_DAYS_TO_RENT, payload:id})
}

export const enterQuantity = (value, id) => dispatch => {
    dispatch({type: ON_QUANTITY_CHANGE, payload: value})
}