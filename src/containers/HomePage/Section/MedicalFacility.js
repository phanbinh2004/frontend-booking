import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class MedicalFacility extends Component {
  render() {
    return (
      <div className="section section-facility">
        <div className="section-content">
          <div className="top-section">
            <h3 className="title-section">Cơ sở y tế nổi bật</h3>
            <button className="more-section">Xem thêm</button>
          </div>
          <div className="body-section">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">
                  Bệnh viện Hữu nghị Việt Đức
                </h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">Bệnh viện Chợ Rẫy</h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">
                  Phòng khám bệnh viện Đại học Y dược 1
                </h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">
                  Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội
                  108
                </h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">
                  Bệnh viện Ung bướu Hưng Việt
                </h3>
              </div>
              <div className="img-customize">
                <div className="aroun-img"></div>
                <h3 className="description-section">Hệ thống y tế MEDLATEC</h3>
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
