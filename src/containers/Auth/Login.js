import React, { Component } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginUser } from "../../services/userService";
// import { userLoginSuccess } from "../../store/actions";

// const Login = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [isShowPassword, setIsShowPassword] = useState(false);
//   const [errMessage, setErrMessage] = useState("");
//   const handleOnChangeUsername = (event) => {
//     if (event.target.value) {
//       setUserName(event.target.value);
//     }
//   };
//   const handleOnChangePassword = (event) => {
//     if (event.target.value) {
//       setPassword(event.target.value);
//     }
//   };
//   const handleShowPassword = () => {
//     setIsShowPassword(!isShowPassword);
//   };
//   const handleLogin = async () => {
//     try {
//       let data = await handleLoginUser(userName, password);
//       console.log("data", data);
//       if (data && data.errCode !== 0) {
//         setErrMessage(data.message);
//       }
//       if (data && data.errCode === 0) {
//         this.props.userLoginSuccess(data.user);
//       }
//     } catch (e) {
//       if (e.response) {
//         if (e.response.data) {
//           this.setState({
//             errMessage: e.response.data.message,
//           });
//         }
//       }
//     }
//   };
//   return (
//     <div className="login-background">
//       <div className="login-container">
//         <div className="login-content row">
//           <div className="col-12 text-login">Login</div>
//           <div className="col-12 form-group login-input">
//             <label>UserName</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter your username"
//               value={userName}
//               onChange={(event) => handleOnChangeUsername(event)}
//             />
//           </div>
//           <div className="col-12 form-group login-input">
//             <label>Password</label>
//             <div className="custom-form">
//               <input
//                 className="form-control"
//                 type={isShowPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(event) => handleOnChangePassword(event)}
//               />
//               <span onClick={handleShowPassword}>
//                 <i
//                   className={isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}
//                 ></i>
//               </span>
//             </div>
//           </div>
//           <div className="col-12" style={{ color: "red" }}>
//             {errMessage}
//           </div>
//           <div className="col-12 btn-login">
//             <button onClick={handleLogin}>Login</button>
//           </div>
//           <div className="col-12">
//             <span className="forgot-password">Forgot your password?</span>
//           </div>
//           <div className="col-12">
//             <span className="text-center login-other">Or Login with:</span>
//           </div>
//           <div className="col-12 social-app">
//             <i className="social-app-gg fab fa-google-plus-g"></i>
//             <i className="social-app-fb fab fa-facebook-f"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }
  handleOnChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLoginUser(
        this.state.username,
        this.state.password
      );
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
    } catch (e) {
      if (e.response) {
        if (e.response.data) {
          this.setState({
            errMessage: e.response.data.message,
          });
        }
      }
    }
  };
  handleShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>UserName</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-form">
                <input
                  className="form-control"
                  type={this.state.isShowPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangePassword(event)}
                />
                <span
                  onClick={() => {
                    this.handleShowPassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "fas fa-eye"
                        : "fas fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12 btn-login">
              <button
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12">
              <span className="text-center login-other">Or Login with:</span>
            </div>
            <div className="col-12 social-app">
              <i className="social-app-gg fab fa-google-plus-g"></i>
              <i className="social-app-fb fab fa-facebook-f"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
