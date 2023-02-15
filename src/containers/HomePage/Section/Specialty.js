import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class Specialty extends Component {
  render() {
    return (
      <div className="section section-specialty">
        <div className="section-content">
          <div className="top-section">
            <h3 className="title-section">Chuyên khoa phổ biến</h3>
            <button className="more-section">Xem thêm</button>
          </div>
          <div className="body-section">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
