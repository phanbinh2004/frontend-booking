import axios from "../axios";
const handleLoginUser = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};
const handleGetAllUser = (userId) => {
  return axios.get(`/api/get-all-users?id=${userId}`);
};
const handleCreateUser = (data) => {
  return axios.post("/api/create-new-user", data);
};
const handleUpdateUser = (data) => {
  return axios.put("/api/edit-user", data);
};
const handleDeleteUser = (id) => {
  return axios.delete(`/api/delete-user?id=${id}`);
};
export {
  handleLoginUser,
  handleGetAllUser,
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
};
