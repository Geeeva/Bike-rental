import {Component} from 'react';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.jpg';

class MainMenu extends Component {
    render () {
        return (
            <div className="header-menu">
                <Container>
                    <NavLink className="logo" to="/" exact><img src={Logo} alt="logo-car-rental"/></NavLink>
                    <nav className={"nav-menu" + (this.props.isOpenedNavbar ? " active" : "")}>
                        <ul className="nav-list">
                            <NavLink className="home" to="/" exact activeStyle={{color: '#000000'}}><li>Home</li></NavLink>
                            <NavLink className="bike-rental" to="/bike-rental" exact activeStyle={{color: '#000000'}}><li>Bike Rental</li></NavLink>
                            <NavLink className="about" to="/about" exact activeStyle={{color: '#000000'}}><li>About</li></NavLink>
                            <NavLink style={{display: this.props.userType === 0 ? "none" : "inline-block"}} to="/admin" exact activeStyle={{color: '#000000'}} ><li>Admin</li></NavLink>
                            <NavLink className="contact" to="/contact" exact activeStyle={{color: '#000000'}}><li>Contact</li></NavLink>
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