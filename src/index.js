import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import userReducer from './store/userReducer'
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    userReducer: userReducer
})
const store = createStore(rootReducer);
ReactDOM.render(<Provider  store={store}><App/></Provider>, document.getElementById('root'));




reportWebVitals();
