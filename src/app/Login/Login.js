import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loggInUser, logout } from "../../_actions/actions";

const initialState = {
  username: "",
  password: "",
  usernameLog:"",
  passwordLog:"",
  email: "",
  firstname: "",
  log: true,
  passForg: false,
  uNameErr: "",
  fNameErr: "",
  passErr: "",
  emailErr: "",
  noteErr: "",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onReg = (e) => {
    if (this.validate()) {
      // stanja za registraciju
      let { firstname, username, password, email } = this.state;
      let userObj = {fname:firstname, uname:username, password: password, mail:email};
      this.setState({ initialState });

      
      axios.post("/api/addNewUser", userObj).then(
        (response) => {
          let server_data = response.data;
          
          if(server_data.msg){
            console.log(server_data.msg);
          }
        },
        (error) => {
          console.log('greska prilikom pravljenja naloga');
        }
      );

    }

  }
  onSubmit = (e) => {
    e.preventDefault();
  
    
      const { dispatch } = this.props;

      let { usernameLog, passwordLog } = this.state;

      //clear form 
      this.setState({ initialState });

      let userObj = { username: usernameLog, pass: passwordLog, valid: "10d" };

      axios.post("/api/login", userObj).then(
        (response) => {
          console.log("server data", response.data);
          let server_data = response.data;

          if (!server_data.idToken) {
            console.log("greska");
            alert(server_data.msg);
          } else {
            //uspjesna prijava imamo token
            localStorage.setItem("MOJ_TOKEN", server_data.idToken);

            if (server_data.isAdmin1) {
              //admin tip
              this.props.loggInUser(usernameLog, 2);
            } else {
              //obican korisnik
              this.props.loggInUser(usernameLog, 1);
            }

            this.props.history.push("/");
            console.log(server_data.idToken);
          }
        },
        (error) => {
          this.setState({
            loading: false,
            badLogin: true,
            badLoginMsg: "Došlo je do greške prilikom prijavljivanja",
          });
        }
      );
    
  };

  validate = () => {
    if(!this.state.log && this.state.passForg == false){
    let { firstname, username, password, email } = this.state;
    let fNameErr,
      uNameErr,
      passErr,
      noteErr,
      emailErr = "";
    if (!firstname.includes(" ") || firstname == "") fNameErr = "red";
    if (username.length <= 4) uNameErr = "red";
    if (password.length < 8 || password == "") passErr = "red";
    if (!email.includes("@")|| email == "") emailErr = "red";

    if (fNameErr || uNameErr || passErr || emailErr) {
      this.setState({
        fNameErr,
        uNameErr,
        passErr,
        emailErr,
        noteErr: "Pogresan unos. Pokusajte ponovo.",
      });
      return false;
    } else {
      let fNameErr,
        uNameErr,
        passErr,
        noteErr,
        emailErr = "";
      this.setState({ fNameErr, uNameErr, passErr, emailErr, noteErr });
      return true;
    }
  }
  return true; 
  };
  genereateForm() {
    if (this.state.log && !this.state.passForg) {
      return (
        <div>
          <div className="labelForm">
            <h2>Log in</h2>
          </div>
          <div>{this.generateLogin()}</div>
        </div>
      );
    } else if (!this.state.log && !this.state.passForg) {
      return (
        <div>
          <div className="labelForm">
            <h2>Sing up</h2>
          </div>
          <div>{this.generateRegister()}</div>
        </div>
      );
    } else if (this.state.passForg && !this.state.log) {
      return (
        <div>
          <div className="labelForm"></div>
          <div>{this.generateEmail()}</div>
        </div>
      );
    }
  }

  generateRegister() {
    return (
      <div className="form-container" >
        <form>
          <div className="form-group">
            <span className="false-reg">
              {this.state.noteErr}
            </span>
            <div className="cpy-input-container fav-user">
              <input
                className="form-control cpy-input"
                name="firstname"
                type="text"
                placeholder="Full name*"
                style={{ borderColor: this.state.fNameErr }}
                onChange={(e) =>
                  this.setState({ firstname: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="cpy-input-container fav-user">
              <input
                className="form-control cpy-input"
                name="username"
                type="text"
                placeholder="Username*"
                style={{ borderColor: this.state.uNameErr }}
                onChange={(e) =>
                  this.setState({ username: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="cpy-input-container fav-pass">
              <input
                style={{ borderColor: this.state.passErr }}
                className="form-control cpy-input"
                name="password"
                type="password"
                placeholder="Password*"
                onChange={(e) =>
                  this.setState({ password: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="cpy-input-container fav-mail">
              <input
                className="form-control cpy-input"
                name="email"
                type="text"
                placeholder="E-mail*"
                style={{ borderColor: this.state.emailErr }}
                onChange={(e) =>
                  this.setState({ email: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="btn-cont">
            <button
              type="button"
              className="btn btn-form"
              onClick={this.onReg}
            >
              <span className="btn-txt"> Sing up </span>
            </button>
          </div>
          <div className="oth-option">
            <div style={{ paddingBottom: 10 }}>
              <span>Have an account? </span>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ log: true, passForg: false, fNameErr:"", uNameErr:"", passErr:"", emailErr:"", noteErr:"" });
                }}
              >
                <span className="link-txt">Log in</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }

  generateLogin() {
    return (
      <div className="form-container">
        
          <div className="form-group">
            <div className="cpy-input-container fav-user">
              <input
                className="form-control cpy-input"
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  this.setState({ usernameLog: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="form-group ">
            <div className="cpy-input-container fav-pass">
              <input
                className="form-control cpy-input"
                name="password"
                type="text"
                placeholder="Password"
                onChange={(e) =>
                  this.setState({ passwordLog: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="btn-cont">
            <button
              type="button"
              className="btn btn-form"
              onClick={this.onSubmit}
            >
              <span className="btn-txt"> Log in </span>
            </button>
          </div>
          <div className="oth-option" >
            <div style={{ paddingBottom: 10 }}>
              <span>Don't have an account? </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ log: false, passForg: false });
                }}
                className="link-txt"
              >
                Sing up
              </a>
            </div>
            <div>
              <span>Forgot password? </span>
              <a
                href="#"
                onClick={(e) => this.setState({ passForg: true, log: false })}
                className="link-txt"
              >
                Enter your email and we'll send you a link
              </a>
            </div>
          </div>
      </div>
    );
  }

  generateEmail() {
    return (
      <div className="form-container">
        <form>
          <div className="form-group">
            <div className="cpy-input-container fav-mail">
              <input
                className="form-control cpy-input"
                name="text"
                type="text"
                placeholder="E-mail"
                onChange={(e) =>
                  this.setState({ password: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="btn-cont">
            <button type="button" className="btn btn-form">
              <span className="btn-txt">Send</span>
            </button>
          </div>
          <div className="oth-option" >
            <div style={{ paddingBottom: 10 }}>
              <span>Have an account? </span>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ log: true, passForg: false });
                }}
              >
                <span className="link-txt">Log in</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    console.log(this.props.loggedIn, "--------------------", this.props.user);

    return (
      <div className="authent-container" >
        <div className="authent-container_img-backg"></div>
        <div className="authent-container_genForm" >
          {this.genereateForm()}
        </div>
        <div className="authent-container_img-backg"></div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
