import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
    this.listenToEmitter();
  }
  listenToEmitter = () => {
    emitter.on("EVENTS_CLEAR_MODAL_DATA", () => {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  };
  componentDidMount() {}
  handleValidate = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Plz enter " + arrInput[i] + " value");
        break;
      }
    }
    return isValid;
  };
  handleCreateNewUser = () => {
    let isValidUser = this.handleValidate();
    if (isValidUser) {
      this.props.createUser(this.state);
    }
    // let response = await handleCreateUser(data);
    // console.log("response", response);
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
          Create New User
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
                  value={this.state.email}
                  onChange={(e) => {
                    this.handleOnChange("email", e);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => {
                    this.handleOnChange("password", e);
                  }}
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
                  onChange={(e) => {
                    this.handleOnChange("firstName", e);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="lastName"
                  value={this.state.lastName}
                  onChange={(e) => {
                    this.handleOnChange("lastName", e);
                  }}
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
              this.handleCreateNewUser();
            }}
          >
            Create
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
