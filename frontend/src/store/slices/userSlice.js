import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../../utils/axiosApi";

const initialState = {
  userInfo: null,
  loading: "idle",
  error: null,
};

export const loginUserAsync = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axiosApi.post("/auth/login", { email, password });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const logoutUserAsync = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosApi.post("/auth/logout");
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = "success";
        state.userInfo = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload?.message;
        alert(state.error);
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.loading = "success";
        state.userInfo = null;
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload?.message;
        alert(state.error);
      }),
});

export const userInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
