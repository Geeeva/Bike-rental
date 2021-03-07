import React, { Component } from "react";
import feedback1 from "../../assets/images/feedback-photo-1.png";
import health from "../../assets/images/health.jpg";
import health1 from "../../assets/images/health1.jpg";
import health2 from "../../assets/images/health2.jpg";
import client1 from "../../assets/images/client1.svg";
import client2 from "../../assets/images/client2.svg";
import client3 from "../../assets/images/client3.svg";
import client4 from "../../assets/images/client4.svg";
import client5 from "../../assets/images/client5.svg";
import subs3 from "../../assets/images/subs3.png";
import instagram1 from "../../assets/images/instagram-1.jpg";
import instagram2 from "../../assets/images/instagram2.jpg";
import instagram3 from "../../assets/images/instagram3.jpg";
import instagram4 from "../../assets/images/instagram4.jpg";
import instagram5 from "../../assets/images/instagram5.jpg";

import "./Home.css";
import HeaderSlider from "../components/HeaderSlider";
import FeedbackSlider from "../components/FeedbackSlider";
import HomeCard from "../components/HomeCard";
import Products from "../BikeRental/Products/Products";

export default class Home extends Component {
  render() {
    return (
      <div style={{ paddingTop: 140}}>
        <section className="s-main-slider">
          <div className="main-slide-navigation"></div>
          <ul className="main-soc-list">
            <li>
              <a href="https://www.facebook.com">facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">instagram</a>
            </li>
          </ul>
          <div className="main-slider" style={{ height: 500 }}>
            <HeaderSlider></HeaderSlider>
          </div>
        </section>

        <section className="s-our-news">
          <div className="container">
            <h2 className="title"></h2>
            <div className="news-cover row">
              <HomeCard
                cardTitle={"Cycling - health benefits"}
                cardImg={"health"}
                cardCont={
                  "Cycling is a healthy, low-impact exercise that can be enjoyed by people of all ages, from young children to older adults. It is also fun, cheap and good for the environment."
                }
              ></HomeCard>
              <HomeCard
                cardTitle={"Mindful Biking"}
                cardImg={"health1"}
                cardCont={
                  "Walking mindfully in a forest to improve one’s health is   known as Shinrin-Yoku, or Forest Bathing, in Japan. It involves walking slowly and being mindful of what the five  senses can take in while one is in the forest. Try to do the same while biking, slowing down to allow your senses to appreciate the natural surroundings. This is best done in silence, either alone or with a group of other people who also agree not to chat."
                }
              ></HomeCard>
              <HomeCard
                cardTitle={"A Longer Life"}
                cardImg={"health2"}
                cardCont={
                  "According to one 2011 study of Tour de France riders,  cycling actually increased the racers’ longevity. On average, the former pros lived to 81.5 years compared to the general population’s 73.5 years: a 17 percent increase!"
                }
              ></HomeCard>
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
        <section class="s-clients client">
          <div class="container">
            <div class="clients-cover">
              <div class="client-slide">
                <div class="client-slide-cover">
                  <img src={client1} alt="img" />
                </div>
              </div>
              <div class="client-slide">
                <div class="client-slide-cover">
                  <img src={client2} alt="img" />
                </div>
              </div>
              <div class="client-slide">
                <div class="client-slide-cover">
                  <img src={client3} alt="img" />
                </div>
              </div>
              <div class="client-slide">
                <div class="client-slide-cover">
                  <img src={client4} alt="img" />
                </div>
              </div>
              <div class="client-slide">
                <div class="client-slide-cover">
                  <img src={client5} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="s-subscribe subs-cont">
          <span class="mask"></span>
          <span
            class="subscribe-effect wow fadeIn subs-cont2 "
            data-wow-duration="1s"
          ></span>
          <div class="container">
            <div class="subscribe-left">
              <h2 class="title">
                <span>Subscribe</span>
              </h2>
              <p>
                Subscribe us and you won't miss the new arrivals, as well as
                discounts and sales.
              </p>
              <div>
                <ul className="social-list">
                  <li>
                    <a target="_blank" href="https://www.facebook.com">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.youtube.com">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <img
              class="wow fadeInRightBlur rx-lazy"
              data-wow-duration=".8s"
              data-wow-delay=".3s"
              src={subs3}
              alt="img"
            />
          </div>
        </section>
        <section class="s-products">
          <div class="container">
            {/*izlistati cetri proizvoda*/}
            <div className="col-12 col-lg-9 shop-cover" style={{ margin: 'auto'}}>
                <Products />
            </div>
          </div>
        </section>
        <section class="s-instagram">
          <div class="instagram-cover">
            <a href="#" class="instagram-item">
              <img class="rx-lazy" src={instagram1} alt="img" />
            </a>

            <a href="#" class="instagram-item">
              <img class="rx-lazy" src={instagram2} alt="img" />
            </a>

            <a href="#" class="instagram-item">
              <img class="rx-lazy" src={instagram5} alt="img" />
            </a>

            <a href="#" class="instagram-item">
              <img class="rx-lazy" src={instagram3} alt="img" />
            </a>

            <a href="#" class="instagram-item">
              <img class="rx-lazy" src={instagram4} alt="img" />
            </a>
          </div>
        </section>
      </div>
    );
  }
}
