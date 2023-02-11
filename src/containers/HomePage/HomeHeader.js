import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    let lang = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.speciality" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="banner.searchdoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.health-facility" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.hospital-clinic" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.doctor" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.good-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.medical-package" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.health-check" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="homeheader.support" />
              </div>
              <div
                className={
                  lang === languages.VI ? "language-vn active" : "language-vn"
                }
              >
                <span
                  onClick={() => {
                    this.changeLanguage(languages.VI);
                  }}
                >
                  VN
                </span>
              </div>
              <div
                className={
                  lang === languages.EN ? "language-en active" : "language-en"
                }
              >
                <span
                  onClick={() => {
                    this.changeLanguage(languages.EN);
                  }}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="top-banner">
            <h1 className="title-banner">
              <FormattedMessage id="banner.platform" />
              <br />
              <b>
                <FormattedMessage id="banner.health-care" />
              </b>
            </h1>
            <div className="content-banner">
              <div className="search-banner">
                <i className="fas fa-search"></i>
                <input
                  className="input-search"
                  type="text"
                  placeholder="Tìm bác sĩ chuyên khoa"
                />
              </div>
            </div>
          </div>
          <div className="options-banner">
            <ul className="list-options">
              <li>
                <div className="link-option">
                  <div className="item-option option1"></div>
                  <FormattedMessage id="banner.examination" />
                  <br />
                  <FormattedMessage id="homeheader.speciality" />
                </div>
              </li>
              <li>
                <div className="link-option">
                  <div className="item-option option2"></div>
                  <FormattedMessage id="banner.examination" />
                  <br />
                  <FormattedMessage id="banner.remote" />
                </div>
              </li>
              <li>
                <div className="link-option">
                  <div className="item-option option3"></div>
                  <FormattedMessage id="banner.examination" />
                  <br />
                  <FormattedMessage id="banner.general" />
                </div>
              </li>
              <li>
                <div className="link-option">
                  <div className="item-option option4"></div>
                  <FormattedMessage id="banner.test" />
                  <br />
                  <FormattedMessage id="banner.medical" />
                </div>
              </li>
              <li>
                <div className="link-option">
                  <div className="item-option option5"></div>
                  <FormattedMessage id="banner.health" />
                  <br />
                  <FormattedMessage id="banner.mental" />
                </div>
              </li>
              <li>
                <div className="link-option">
                  <div className="item-option option6"></div>
                  <FormattedMessage id="banner.examination" />
                  <br />
                  <FormattedMessage id="banner.dentistry" />
                </div>
              </li>
              <li>
                <div className="link-option">
                  <div className="item-option option7"></div>
                  <FormattedMessage id="banner.package" />
                  <br />
                  <FormattedMessage id="banner.surgery" />
                </div>
              </li>
              <li>
                <div className="link-option">
                  <div className="item-option option8"></div>
                  <FormattedMessage id="banner.products" />
                  <br />
                  <FormattedMessage id="banner.medical" />
                </div>
              </li>
              <li>
                <div className="link-option">
                  <div className="item-option option9"></div>
                  <FormattedMessage id="banner.health" />
                  <br />
                  <FormattedMessage id="banner.bussines" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
