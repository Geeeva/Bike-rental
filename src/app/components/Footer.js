import {Container} from 'react-bootstrap';
import BikeRental from "../BikeRental/BikeRental";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="row footer-item-cover">
                    <div className="footer-subscribe col-md-4">
                        <h6>info</h6>
                        <ul className="footer-list">
                            <li><a href="shop.html">FAQ</a></li>
                            <li><a href="shop.html">Contacts</a></li>
                            <li><a href="shop.html">About</a></li>
                            <li><a href="shop.html">Search</a></li>
                        </ul>
                    </div>
                    <div className="footer-item col-md-4">
                        <h6>Bike rental</h6>
                        <ul className="footer-list">
                             <li><a href="shop.html">Mountain Bike</a></li>
                            <li><a href="shop.html">Touring Bike</a></li>
                            <li><a href="shop.html">Electric  Bike</a></li>
                            <li><a href="shop.html">Road Bike</a></li>
                        </ul>
                    </div>
                    <div className="footer-touch col-md-4">
                        <h6>stay in touch</h6>
                        <ul className="footer-soc social-list">
                            <li><a target="_blank" href="https://www.facebook.com/rovadex"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/rovadex"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    <div className="footer-autor">Contact us on: <a href="mailto:bikerental@gmail.com">bikerental@gmail.com</a></div>
                    </div>
                </div>
                <div className="footer-bottom col-md-12">
                    <div className="footer-copyright"><a target="_blank" href="https://bike-rental.com">Bike Rental</a> © 2021. All Rights Reserved.</div>
                </div>

        </Container>
    </footer>
    );
}

export default Footer;