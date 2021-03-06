import {Component} from "react";
import MainMenu from './MainMenu';
import {Container} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loggInUser, logout} from "../../_actions/actions";

class Header extends Component {
    state = {
        isOpenedNavbar: false,
        isHovered: false
    }
    handleNavbarMobToggle = () => {
        console.log(this.state.isOpenedNavbar);
        this.setState({ isOpenedNavbar: !this.state.isOpenedNavbar });

        if(this.state.isOpenedNavbar === true){
            document.body.classList.add('pageLoaded');
        } else{
            document.body.classList.remove('pageLoaded');
        }
    }
    handleHover = () => {
        if(this.state.isHovered === false){
            setTimeout(
                () => this.setState(prevState => ({
                    isHovered: !prevState.isHovered
                })),
                2000
            );
        } else{
            setTimeout(
                () => this.setState(prevState => ({
                    isHovered: !prevState.isHovered
                })),
                2000
            );
        }
    }

    handleLogout = () => {
        localStorage.clear();
        this.props.logout();
    }

    render(){
        return (
            <header className="header">
                <div className={"nav-btn" + (this.state.isOpenedNavbar? " active" : "")} onClick ={this.handleNavbarMobToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="top-panel">
                    <Container>
                        <div className="top-panel-cover">
                            <ul className="header-cont">
                                <li><a href="tel:+38267214468"><i className="fa fa-phone"></i>+382 67 214 468</a></li>
                                <li><a href="mailto:bikerentalo@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>bikerental@gmail.com</a></li>
                            </ul>
                            <ul className="nav-list">
                                <li className={"dropdown" + (this.state.isHovered ? " active" : "")}>
                                    <a href="#" className="header-user"><i className="fa fa-user dropdown" aria-hidden="true" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}></i></a>
                                    <ul>
                                        <NavLink className="home" to="/login" exact ><li>Login/Register</li></NavLink>
                                        <NavLink className="home" onClick={this.handleLogout} to="/login" exact ><li>Logout</li></NavLink>
                                    </ul>
                                </li>
                                <li><a className="header-cart" href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <MainMenu isOpenedNavbar={this.state.isOpenedNavbar}/>
            </header>
        );
    }

}
function mapStateToProps(state) {
    const { loggedIn, user } = state.authentication;
    return {
        loggedIn,
        user,
    };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            loggInUser,
            logout,
        },
        dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
