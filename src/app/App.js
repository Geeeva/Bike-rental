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
                <Router>
                    <Header />
                    <Switch>
                        <Route className="home-route" path="/" exact strict component={Home}/>
                        <Route className="bike-rental-route" path="/bike-rental" exact strict component={BikeRental}/>
                        <Route className="about-route" path="/about" exact strict component={About}/>
                        <Route className="admin-route" path="/admin" exact strict component={Admin}/>
                        <Route className="contact-route" path="/contact" exact strict component={Contact}/>
                        <Route className="contact-route" path="/login" exact strict component={Login}/>
                        <Route className="not-found" component={NotFound} />
                    </Switch>
                    <Footer />
                </Router>
            </>
        )
    }
}
export default App;

