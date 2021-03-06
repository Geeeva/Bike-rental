import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import authentication from './authentication.reducers';
import products from './products.reducers';
import product from './product.reducers';
import basket from './basket.reducers';
import categories from './categories.reducers';


export default history => combineReducers({
    router: connectRouter(history),
    authentication,
    products,
    product,
    basket,
    categories
})