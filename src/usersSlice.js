import { createSlice } from "@reduxjs/toolkit";
// fake data
import { usersData } from "./fakeData";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: usersData,
  },
  reducers: {
    addUser: (state, action) => {
      const { payload } = action;
      state.users.push(payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export const addUserAsync = (user) => (dispatch) => {
  setTimeout(() => {
    dispatch(addUser(user));
  }, 2000);
};

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
