import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import usersReducer from "./users";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
});

export default rootReducer;
