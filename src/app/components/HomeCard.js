import React from 'react'
import health from "../../assets/images/health.jpg";

const HomeCard=(props) =>{
    let img = props.cardImg;
    return (
        <div className="col-12 col-md-6 col-lg-4">
                <div className="news-item">
                  <h6 className="title">
                    <a href="#">{props.cardTitle}</a>
                  </h6>
                  <div className="news-post-thumbnail">
                    <a href="#">
                      <img className="rx-lazy" src={health} alt="news" />
                    </a>
                  </div>

                  <div className="post-content">
                    <p>
                      {props.cardCont}
                    </p>
                  </div>
                  <a class="btn-news"></a>
                </div>
              </div>
    )
}
export default HomeCard;