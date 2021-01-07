import { createSlice } from "@reduxjs/toolkit";
// fake data
import { usersData } from "./fakeData";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersData,
  },
  reducers: {
    addUser: (state, action) => {
      const { payload } = action;
      state.usersData.push(payload);
    },
  },
});
// synchronous actions
export const { addUser } = usersSlice.actions;
// asynchronous actions
export const addUserAsync = (user) => (dispatch) => {
  setTimeout(() => {
    dispatch(addUser(user));
  }, 2000);
};

export const selectUsers = (state) => state.users.usersData;

export default usersSlice.reducer;
