import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyImg from "../../../assets/specialty/co-xuong-khop.jpeg";
console.log(specialtyImg);
class MedicalFacility extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    return (
      <div className="section-specialty">
        <div className="specialty-content">
          <div className="top-section">
            <h3 className="title">Chuyên khoa phổ biến</h3>
            <button>Xem thêm</button>
          </div>
          <div className="body-section">
            <Slider {...settings}>
              <div className="img-customize">
                <div className="aroun-img">
                  <img
                    src={specialtyImg}
                    alt="specialty"
                    className="img-link"
                  />
                </div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img">
                  <img
                    src={specialtyImg}
                    alt="specialty"
                    className="img-link"
                  />
                </div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img">
                  <img
                    src={specialtyImg}
                    alt="specialty"
                    className="img-link"
                  />
                </div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img">
                  <img
                    src={specialtyImg}
                    alt="specialty"
                    className="img-link"
                  />
                </div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img">
                  <img
                    src={specialtyImg}
                    alt="specialty"
                    className="img-link"
                  />
                </div>
                <h3 className="description-section">Cơ xương khớp</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img">
                  <img
                    src={specialtyImg}
                    alt="specialty"
                    className="img-link"
                  />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
