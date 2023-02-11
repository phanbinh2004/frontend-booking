import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }
  componentDidMount() {
    let data = this.props.user;
    if (data && !_.isEmpty(data)) {
      this.setState({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
      });
    }
  }
  handleValidate = () => {
    let isValid = true;
    let arrInput = ["email", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Plz enter " + arrInput[i] + " value");
        break;
      }
    }
    return isValid;
  };
  handleSaveUser = async (id) => {
    let isValidUser = this.handleValidate();
    if (isValidUser) {
      await this.props.updateUser({ ...this.state, id });
    }
  };
  handleOnChange = (type, e) => {
    let copyState = { ...this.state };
    copyState[type] = e.target.value;
    this.setState({
      ...copyState,
    });
  };

  render() {
    return (
      <Modal
        funk={"true"}
        isOpen={this.props.isModalUser}
        toggle={this.props.toggleFromParent}
      >
        <ModalHeader toggle={this.props.toggleFromParent}>
          Update user
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="form-row">
              <div className="col-12 mt-3">Create user account</div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  defaultValue={this.state.email}
                  disabled
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  defaultValue="123456"
                  disabled
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="firstName"
                  value={this.state.firstName}
                  onChange={(e) => this.handleOnChange("firstName", e)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="lastName"
                  value={this.state.lastName}
                  onChange={(e) => this.handleOnChange("lastName", e)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="1234 Main St"
                value={this.state.address}
                onChange={(e) => {
                  this.handleOnChange("address", e);
                }}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              this.handleSaveUser(this.props.user.id);
            }}
          >
            Save
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggleFromParent}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
