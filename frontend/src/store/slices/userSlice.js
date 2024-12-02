import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  loading: "idle",
  error: null,
};

const userSlice = createSlice({ name: "user", initialState, reducers: {} });

export default userSlice.reducer;
