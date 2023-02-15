import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class Handbook extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="section section-handbook">
        <div className="section-content">
          <div className="top-section">
            <h3 className="title-section">Cẩm nang</h3>
            <button className="more-section">Tất cả bài viết</button>
          </div>
          <div className="body-section">
            <Slider {...settings}>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <div className="description-section">
                  <h3>6 địa chỉ khám tầm soát ung thư vú uy tín tại Hà Nội</h3>
                </div>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <div className="description-section">
                  <h3>6 địa chỉ khám tầm soát ung thư vú uy tín tại Hà Nội</h3>
                </div>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <div className="description-section ">
                  <h3>6 địa chỉ khám tầm soát ung thư vú uy tín tại Hà Nội</h3>
                </div>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <div className="description-section">
                  <h3>6 địa chỉ khám tầm soát ung thư vú uy tín tại Hà Nội</h3>
                </div>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <div className="description-section">
                  <h3>6 địa chỉ khám tầm soát ung thư vú uy tín tại Hà Nội</h3>
                </div>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <div className="description-section">
                  <h3>6 địa chỉ khám tầm soát ung thư vú uy tín tại Hà Nội</h3>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
