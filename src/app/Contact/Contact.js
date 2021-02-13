import React, { Component } from "react";
import img1 from "../../assets/images/img1.jpg";
import cont1 from "../../assets/images/cont1.svg";
import cont2 from "../../assets/images/cont2.svg";
import cont3 from "../../assets/images/cont3.svg";
import HeaderTitle from "../components/HeaderTitle";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Contact",
      name:"",
      email:"",
      phone:"",
      message:""
    };
  }
  onComment = (e) =>{
    e.preventDefault();
    console.log("komentar");
  }
  render() {
    return (
      <div>
        <HeaderTitle title={this.state.title}></HeaderTitle>
        <section className="contacts-top">
          <div className="container">
            <div className="row contact-top-cover">
              <div className="col-12 col-lg-6 contact-img">
                <img src={img1} alt="img" />
              </div>
              <div className="col-12 col-lg-6 contact-info">
                <h2 className="title">Contact Information</h2>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit <a href="#">totam rem</a>{" "}
                  aperiam, eaque sed quia non numquam eius modi tempora incidunt
                  ut labore et dolore magnam aliquam.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim Nor again is
                  there anyone who loves or pursues or desires to obtain.
                </p>
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
          </div>
        </section>

        <section className="s-contacts-block">
          <div className="container">
            <div className="row contacts-block">
              <div className="col-12 col-md-4">
                <div className="contact-block-item">
                  <div className="contact-block-left">
                    <img src={cont1} alt="img" />
                    <h6>need help</h6>
                  </div>
                  <div className="contact-block-right">
                    <ul>
                      <li>
                        <a href="tel:068-000-000">068-000-000</a>
                      </li>
                      <li>
                        <a href="tel:068-000-000">068-000-000</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="contact-block-item">
                  <div className="contact-block-left">
                    <img src={cont2} alt="img" />
                    <h6>questions</h6>
                  </div>
                  <div className="contact-block-right">
                    <ul>
                      <li>
                        <a href="mailto:team@gmail.com">team@gmail.com</a>
                      </li>
                      <li>
                        <a href="mailto:help@gmail.com">help@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="contact-block-item">
                  <div className="contact-block-left">
                    <img src={cont3} alt="img" />
                    <h6>address</h6>
                  </div>
                  <div className="contact-block-right">
                    <ul>
                      <li>
                        <a className="item-scroll" href="#map">
                          8500, Lorem Street, Chicago, IL, 55030
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="s-contacts page-contacts">
          <div className="container s-anim">
            <h2 className="title">Contact us</h2>
            <ul className="form-cover">
              <li className="inp-name ">
                <input
                  className="cpy-input"
                  id="name"
                  type="text"
                  name="your-name"
                  placeholder="Name"
                  onChange={(e) =>
                    this.setState({ name: e.currentTarget.value })
                  }
                />
              </li>
              <li className="inp-phone">
                <input
                  className="cpy-input"
                  id="phone"
                  type="tel"
                  name="your-phone"
                  placeholder="Phone"
                  onChange={(e) =>
                    this.setState({ phone: e.currentTarget.value })
                  }
                />
              </li>
              <li className="inp-email">
                <input
                  className="cpy-input"
                  id="email"
                  type="email"
                  name="your-email"
                  placeholder="E-mail"
                  onChange={(e) =>
                    this.setState({ email: e.currentTarget.value })
                  }
                />
              </li>
              <li className="inp-text">
                <textarea
                  className="cpy-input "
                  id="comments"
                  name="your-text"
                  placeholder="Message"
                  onChange={(e) =>
                    this.setState({ message: e.currentTarget.value })
                  }
                ></textarea>
              </li>
            </ul>

            <div className="btn-cont">
              <button
                className="btn btn-form"
                type="button"
                className="btn"
                onClick={this.onComment}


              >
                <span className="btn-txt">submit comment</span>
              </button>
            </div>
            
            <div id="message"></div>
          </div>
        </section>
 
      </div>
    );
  }
}

export default Contact;
