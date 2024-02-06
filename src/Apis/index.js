import axios from "axios";
import users from "../redux/slice/users";

axios.defaults.baseURL = "http://localhost:8000";

export const getUsersAPI = async () => axios.get("/users");

export const getUsersByIdAPI = async (id) => axios.get(`/users/${id}`);

export const createUsersAPI = async (user) => axios.post("/users", user);

export const updateUsersAPI = async (user) =>
  axios.put(`/users/${user.id}`, user);

export const deleteUsersByIdAPI = async (id) =>
  axios.delete(`/users/${id}`, users);
