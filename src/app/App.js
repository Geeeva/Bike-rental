import {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home/Home';
import BikeRental from './BikeRental/BikeRental';
import About from './About/About';
import Admin from './Admin/Admin';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import SingleProduct from './BikeRental/Products/SingleProduct/SingleProduct';
import Basket from './Basket/Basket';
import Checkout from './Checkout/Checkout.js';
import '../assets/sass/style.scss';

class App extends Component {
    state = { isOpen: false }
    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }

    render () {
        return (
            <>
                <Router basename="/bike-rental/">
                    <Header />
                    <Switch>
                        <Route  path="/" exact strict component={Home}/>
                        <Route path="/bike-rental" exact strict component={BikeRental}/>
                        <Route path="/about" exact strict component={About}/>
                        <Route  path="/admin" exact strict component={Admin}/>
                        <Route path="/contact" exact strict component={Contact}/>
                        <Route path="/login" exact strict component={Login}/>
                        <Route path="/categories/:id" exact strict component={BikeRental}/>
                        <Route path="/single-product/:id" exact strict component={SingleProduct}/>
                        <Route path="/basket" exact strict component={Basket}/>
                        <Route path="/checkout" exact strict component={Checkout}/>
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </Router>
            </>
        )
    }
}
export default App;

