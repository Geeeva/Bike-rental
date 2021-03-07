import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import feedback1 from "../../assets/images/feedback-photo-1.png";

import '../Home/Home.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
      id: 2,
      username: "John",
      testamonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      username: "Marcos",
      testamonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      username: "Lena",
      testamonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      username: "Iv",
      testamonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
export default class FeedbackSlider extends Component {
    render() {
        return (
            
                 <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {data.map((user) => (
                  <SwiperSlide key={user.id} className="slider">
                    <div
                      className="slide-content"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 300,
                        backgroundColor: "white",
                        flexDirection: "column",
                      }}
                    >
                      <div className="user-image">
                        <img src={feedback1} className="user-photo"></img>
                      </div>
                      <h5 style={{ marginTop: 20, marginBottom: 15 }}>
                        {user.username}
                      </h5>
                      <p className="feedback-content">{user.testamonial}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            
        )
    }
}
