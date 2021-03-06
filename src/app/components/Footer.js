import {Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="row footer-item-cover">
                    <div className="footer-subscribe col-md-4">
                        <h6>info</h6>
                        <ul className="footer-list">
                            <li><Link to="/about">FAQ</Link></li>
                            <li><Link to="/contact">Contacts</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/bike-rental">Search</Link></li>
                        </ul>
                    </div>
                    <div className="footer-item col-md-4">
                        <h6>Bike rental</h6>
                        <ul className="footer-list">
                             <li><Link to="/categories/1">Mountain Bike</Link></li>
                            <li><Link to="/categories/2">Touring Bike</Link></li>
                            <li><Link to="/categories/3">Electric  Bike</Link></li>
                            <li><Link to="/categories/4">Road Bike</Link></li>
                        </ul>
                    </div>
                    <div className="footer-touch col-md-4">
                        <h6>stay in touch</h6>
                        <ul className="footer-soc social-list">
                            <li><Link target="_blank" href="https://www.facebook.com/rovadex"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link target="_blank" href="https://www.instagram.com/rovadex"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                        </ul>
                    <div className="footer-autor">Contact us on: <a href="mailto:bikerental@gmail.com">bikerental@gmail.com</a></div>
                    </div>
                </div>
                <div className="footer-bottom col-md-12">
                    <div className="footer-copyright"><Link to="/">Bike Rental</Link> © 2021. All Rights Reserved.</div>
                </div>

        </Container>
    </footer>
    );
}

export default Footer;