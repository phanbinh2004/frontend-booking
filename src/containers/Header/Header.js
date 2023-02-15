import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import { languages } from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions";
import "./Header.scss";

class Header extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    const { processLogout } = this.props;
    let lang = this.props.language;
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="header-right-content">
          <div className="languages">
            <span
              className={
                lang === languages.VI ? "language-vi active" : "language-vi"
              }
              onClick={() => {
                this.changeLanguage(languages.VI);
              }}
            >
              VN
            </span>
            <span
              className={
                lang === languages.EN ? "language-en active" : "language-en"
              }
              onClick={() => {
                this.changeLanguage(languages.EN);
              }}
            >
              EN
            </span>
          </div>
          {/* nút logout */}
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Log out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
