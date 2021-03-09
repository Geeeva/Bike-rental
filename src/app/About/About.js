import About1 from '../../assets/images/about/about-1.jpg';
import About2 from '../../assets/images/about/about-2.jpg';
import Ivana from "../../assets/images/about/ivana.jpg";
import Jelena from "../../assets/images/about/jelena.jpg";
import Card from "../../assets/images/about/card.svg"
import Warranty from "../../assets/images/about/warranty.svg"
import Discount from "../../assets/images/about/discount.svg"
import FeedbackSlider from "../components/FeedbackSlider";

const About = () => {
    return (
        <>
            <section className="s-header-title">
                <div className="container">
                    <h1>About Us</h1>
                    <ul className="breadcrambs">
                        <li><a href="index.html">Home</a></li>
                        <li>About Us</li>
                    </ul>
                </div>
            </section>
            <section className="s-about-advantages">
                <div className="container">
                <h2 className="title"><span>Our mission</span></h2>
            <div className="row about-adv-cover">
                <div className="cil-12 col-md-6 about-adv-item">
                    <img src={About1} alt="about-first"/>
                <h5 className="title">Explore nature</h5>
            <p>Bike riding is the best way to get closer to the environment and enjoy the freedom and excitement that comes with it. It is much fun compared to other modes of transport, especially for adventure lovers. You get a chance to explore the city without being constricted in a car.</p>
            </div>
            <div className="cil-12 col-md-6 about-adv-item">
                <img src={About2} alt="about-second"/>
                <h5 className="title">Meet new people</h5>
            <p>Cycling is an incredibly fun and social sport, especially if you do it in groups. You can rent a bike and join a cycling tour where you meet lots of like-minded people, talk about like-minded stuff and before you realize it, you are making new friends. You get to bond over your previous cycling experiences, your favorite bike gears, and what you love most about biking.</p>
            </div>
            </div>
            <div className="our-advantages-wrap advantages-wrap-about">
                <div className="advantages"><h2 className="title"><span>Advantages</span></h2></div>
                <div className="our-advantages-item">
                <img src={Card} alt="card"/>
                <h5>Reliable bicyles</h5>
            </div>
            <div className="our-advantages-item wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".25s">
                <img src={Warranty} alt="warranty"/>

                <h5>Available service</h5>
            </div>
            <div className="our-advantages-item wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".35s">
                <img src={Discount} alt="discount"/>
                <h5>Card payment</h5>
            </div>

            </div>
            </div>
            </section>
            <section className="sek s-feedback">
                <span className="effwct-bg-feedback"></span>
                <span className="mask"></span>
                <div className="container">
                    <h2 class="title">feedback</h2>
                    <div className="main-slider" style={{ height: 500 }}>
                    <FeedbackSlider></FeedbackSlider>
                    </div>
                </div>
            </section>
            <section className="s-our-team">
                <div className="container">
                    <h2 className="title"><span>our team</span></h2>
                    <div className="row team-cover">
                        <div className="col-sm-6 col-md-6 team-item">
                            <img src={Ivana} alt="sales-manager"/>
                            <h5 className="title">Ivana Gilic</h5>
                            <div className="prof">Sales Manager</div>
                            <ul className="social-list">
                                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/ivana.gilic.5"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/geeevaaa/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 team-item">
                            <img src={Jelena} alt="sales-manager"/>
                            <h5 className="title">Jelena Radovanovic</h5>
                            <div className="prof">Sales Manager</div>
                            <ul className="social-list">
                                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;