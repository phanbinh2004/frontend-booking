import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class OutStandingDoctor extends Component {
  render() {
    let setting = this.props;
    console.log(setting);
    return (
      <div className="section section-outdoctor">
        <div className="section-content">
          <div className="top-section">
            <h3 className="title-section">Bác sĩ nổi bật tuần qua</h3>
            <button className="more-section">Xem thêm</button>
          </div>
          <div className="body-section">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <div className="customize-border">
                  <div className="aroun-img"></div>
                  <div className="description-section text-center">
                    <div className="description-name">
                      Giáo sư tiến sĩ EriDev
                    </div>
                    <div className="description-field">Cơ xương khớp 1</div>
                  </div>
                </div>
              </div>
              <div className="img-customize">
                <div className="customize-border">
                  <div className="aroun-img"></div>
                  <div className="description-section text-center">
                    <div className="description-name">
                      Giáo sư tiến sĩ EriDev
                    </div>
                    <div className="description-field">Cơ xương khớp 1</div>
                  </div>
                </div>
              </div>
              <div className="img-customize">
                <div className="customize-border">
                  <div className="aroun-img"></div>
                  <div className="description-section text-center">
                    <div className="description-name">
                      Giáo sư tiến sĩ EriDev
                    </div>
                    <div className="description-field">Cơ xương khớp 1</div>
                  </div>
                </div>
              </div>
              <div className="img-customize">
                <div className="customize-border">
                  <div className="aroun-img"></div>
                  <div className="description-section text-center">
                    <div className="description-name">
                      Giáo sư tiến sĩ EriDev
                    </div>
                    <div className="description-field">Cơ xương khớp 1</div>
                  </div>
                </div>
              </div>
              <div className="img-customize">
                <div className="customize-border">
                  <div className="aroun-img"></div>
                  <div className="description-section text-center">
                    <div className="description-name">
                      Giáo sư tiến sĩ EriDev
                    </div>
                    <div className="description-field">Cơ xương khớp 1</div>
                  </div>
                </div>
              </div>
              <div className="img-customize">
                <div className="customize-border">
                  <div className="aroun-img"></div>
                  <div className="description-section text-center">
                    <div className="description-name">
                      Giáo sư tiến sĩ EriDev
                    </div>
                    <div className="description-field">Cơ xương khớp 1</div>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
