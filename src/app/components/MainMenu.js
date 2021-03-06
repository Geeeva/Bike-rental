import {Component} from 'react';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.jpg';

class MainMenu extends Component {
    render () {
        return (
            <div className="header-menu">
                <Container>
                    <Link className="logo" to="/" exact><img src={Logo} alt="logo-car-rental"/></Link>
                    <nav className={"nav-menu" + (this.props.isOpenedNavbar ? " active" : "")}>
                        <ul className="nav-list">
                            <Link className="home" to="/" exact><li>Home</li></Link>
                            <Link className="bike-rental" to="/bike-rental" exact><li>Bike Rental</li></Link>
                            <Link className="about" to="/about" exact ><li>About</li></Link>
                            <Link style={{display: this.props.userType === 0 ? "none" : "inline-block"}} to="/admin" exact><li>Admin</li></Link>
                            <Link className="contact" to="/contact" exact><li>Contact</li></Link>
                        </ul>
                    </nav>
                </Container>
            </div>
        )
    }
}


const mapStateToProps = store => {
    return {
        userType: store.userType
    }
};

/*const mapDispatchToProps = dispatch => {
    return {
        documentsDisplayHandler: () => dispatch({type: 'SET_USER_TYPE'}),
    }
};*/

export default connect(mapStateToProps, null)(MainMenu);