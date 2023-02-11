import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserList.scss";
import { emitter } from "../../utils/emitter";
import {
  handleGetAllUser,
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
} from "../../services/userService";
import ModalUser from "./ModalCreateUser";
import ModalEditUser from "./ModalEditUser";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [],
      isModalCreate: false,
      isModalUpdate: false,
      curentUser: {},
    };
  }
  async componentDidMount() {
    await this.handleGetUser();
  }
  handleGetUser = async () => {
    let data = await handleGetAllUser("ALL");
    if (data && data.errCode === 0) {
      this.setState({
        dataUser: data.users,
      });
    }
  };
  handleCreateNewUser = async (data) => {
    try {
      let response = await handleCreateUser(data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.handleGetUser();
        this.setState({
          isModalCreate: false,
        });
        emitter.emit("EVENTS_CLEAR_MODAL_DATA");
      }
    } catch (err) {
      console.log(err);
    }
  };
  handleToggle = () => {
    this.setState({
      isModalCreate: !this.state.isModalCreate,
    });
  };
  handleToggleUpdate = () => {
    this.setState({
      isModalUpdate: !this.state.isModalUpdate,
    });
  };
  handleDeleteUser = async (id) => {
    try {
      let response = await handleDeleteUser(id);
      if (response && response.errCode === 0) {
        await this.handleGetUser();
      }
    } catch (e) {
      console.log(e);
    }
  };
  handleUpdate = async (data) => {
    try {
      let response = await handleUpdateUser(data);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        this.setState({
          isModalUpdate: false,
        });
        await this.handleGetUser();
      }
    } catch (e) {
      console.log(e);
    }
  };
  handleEditUser = (user) => {
    this.setState({
      isModalUpdate: true,
      curentUser: user,
    });
  };
  render() {
    let dataAllUser = this.state.dataUser;
    return (
      <div className="user-container">
        {this.state.isModalUpdate && (
          <ModalEditUser
            isModalUser={this.state.isModalUpdate}
            toggleFromParent={this.handleToggleUpdate}
            user={this.state.curentUser}
            updateUser={this.handleUpdate}
          />
        )}

        <ModalUser
          isModalUser={this.state.isModalCreate}
          toggleFromParent={this.handleToggle}
          createUser={this.handleCreateNewUser}
        />

        <div className="title text-center">Manage User With EriDev</div>
        <div className="user-manage mx-3 mt-4">
          <button
            className="create-user mr-2"
            onClick={() => {
              this.setState({
                isModalCreate: true,
              });
            }}
          >
            <i className="fas fa-plus add"></i>
            Create New User
          </button>
          <table className="customers">
            <thead>
              <tr>
                <th>Eamil</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {dataAllUser.length > 0 &&
                dataAllUser.map((item) => (
                  <tr key={item.id}>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <button
                        className="edit-user"
                        onClick={() => {
                          this.handleEditUser(item);
                        }}
                      >
                        <i className="fas fa-user-edit"></i>
                      </button>
                      <button
                        className="delete-user"
                        onClick={() => {
                          this.handleDeleteUser(item.id);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
