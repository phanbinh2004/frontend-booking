import React, { Component } from "react";
import { connect } from "react-redux";
class Footer extends Component {
  render() {
    return (
      <div className="section section-footer">
        <div className="footer-content">
          &copy; 2023 bookingEriDev.com
          <a href="https://github.com/phanbinh2004" target="_blank">
            See more info
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
