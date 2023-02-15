import React, { Component } from "react";
import { connect } from "react-redux";
class About extends Component {
  render() {
    return (
      <div className="section section-about">
        <div className="about-body">
          <div className="about-header">Truyền thông nói gì về Eri Dev</div>
          <div className="about-content">
            <div className="about-content-left">
              <iframe
                width="570px"
                height="320px"
                src="https://www.youtube.com/embed/69QdAw3ApNk"
                title="about"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="about-content-right">
              Hãy cùng xem các trang mạng, báo chí, truyền thông phỏng vấn cũng
              như nói gì về Booking
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
