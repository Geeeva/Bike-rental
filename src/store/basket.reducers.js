import {ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET, CLEAN_BASKET, INCREASE_DAYS_TO_RENT, DECREASE_DAYS_TO_RENT, ON_QUANTITY_CHANGE} from '../utils/constants';

const initialState = {
    basketIds: [],
    basketDaysQuantity: 1,
    currentlySelectedProduct: null
};

const basketReducer = (state = initialState, action) => {
    //console.log("sa vrha redcure" + state.basketDaysQuantity)
    switch(action.type) {
        case ADD_PRODUCT_TO_BASKET:
            const newIds = state.basketIds.concat({id: action.payload, days_to_rent: state.basketDaysQuantity});
            let uniqueIds = [];

            newIds.filter(item => {
                let i = uniqueIds.findIndex(x => x.id === item.id);
                    if(i <= -1){
                        uniqueIds.push(item);
                    }
            })
            uniqueIds.forEach(item =>
                {if(item.id === action.payload){
                    item.days_to_rent = state.basketDaysQuantity;
                }}
            )
            //console.log("iz reducera" + newIds[0].days_to_rent)
            return {
                ...state,
                basketIds: uniqueIds,
                basketDaysQuantity: 1
            }
        case REMOVE_PRODUCT_FROM_BASKET:
            const filteredBasketIds = state.basketIds.filter(id => Number(id.id) !== Number(action.payload));
            return{
                ...state,
                basketIds: filteredBasketIds
            }
        case CLEAN_BASKET:
            return {
                ...state,
                basketIds: []
            }
        case INCREASE_DAYS_TO_RENT:
            if(state.basketDaysQuantity >= 1){
                state.basketDaysQuantity = parseInt(state.basketDaysQuantity) + 1;
            } else if(state.basketDaysQuantity > 0){
                state.basketDaysQuantity = 1;
            }
            return {
                ...state,
                basketDaysQuantity: state.basketDaysQuantity
            }
        case DECREASE_DAYS_TO_RENT:
            if(state.basketDaysQuantity >= 2){
                state.basketDaysQuantity = parseInt(state.basketDaysQuantity) - 1;
            } else if(state.basketDaysQuantity === 1){
                state.basketDaysQuantity = 1;
            }
            return {
                ...state,
                basketDaysQuantity: state.basketDaysQuantity
            }
        case ON_QUANTITY_CHANGE:
            let counter;
            if(action.payload <= 0){
                counter = 1;
            } else {
                counter = action.payload
            }
            //console.log("iz reducera counter" + counter)
            return {
                ...state,
                basketDaysQuantity: counter
            }
        default:
            return {
                ...state,
                basketDaysQuantity: 1
            }
    }
};

export default basketReducer;