import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../../utils/axiosApi";

const initialState = {
  todos: [],
  getAllTodosloading: "idle",
  addTodoloading: "idle",
  editTodoloading: "idle",
  deleteTodoloading: "idle",
  error: null,
};

export const getAllTodosAsync = createAsyncThunk(
  "todo/getAllTodos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosApi.get("/todo");
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async ({ title, description }, { rejectWithValue }) => {
    try {
      const res = await axiosApi.post("/todo", { title, description });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const editTodoAsync = createAsyncThunk(
  "todo/editTodo",
  async ({ todoId, title, description }, { rejectWithValue }) => {
    try {
      const res = await axiosApi.put(`/todo/${todoId}`, { title, description });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteTodo",
  async (todoId, { rejectWithValue }) => {
    try {
      const res = await axiosApi.delete(`/todo/${todoId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllTodosAsync.pending, (state) => {
        state.getAllTodosloading = "loading";
      })
      .addCase(getAllTodosAsync.fulfilled, (state, action) => {
        state.getAllTodosloading = "success";
        state.todos = action.payload?.todos;
      })
      .addCase(getAllTodosAsync.rejected, (state, action) => {
        state.getAllTodosloading = "failed";
        state.error = action.payload?.message;
        alert(state.error);
      })
      .addCase(addTodoAsync.pending, (state) => {
        state.addTodoloading = "loading";
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.addTodoloading = "success";
        alert(action.payload?.message);
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.addTodoloading = "failed";
        state.error = action.payload?.message;
        alert(state.error);
      })
      .addCase(editTodoAsync.pending, (state) => {
        state.editTodoloading = "loading";
      })
      .addCase(editTodoAsync.fulfilled, (state, action) => {
        state.editTodoloading = "success";
        alert(action.payload?.message);
      })
      .addCase(editTodoAsync.rejected, (state, action) => {
        state.editTodoloading = "failed";
        state.error = action.payload?.message;
        alert(state.error);
      })
      .addCase(deleteTodoAsync.pending, (state) => {
        state.deleteTodoloading = "loading";
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.deleteTodoloading = "success";
        alert(action.payload?.message);
      })
      .addCase(deleteTodoAsync.rejected, (state, action) => {
        state.deleteTodoloading = "failed";
        state.error = action.payload?.message;
        alert(state.error);
      }),
});

export const todos = (state) => state.todo.todos;
export const addTodoloading = (state) => state.todo.addTodoloading;
export const editTodoloading = (state) => state.todo.editTodoloading;
export const deleteTodoloading = (state) => state.todo.deleteTodoloading;

export default todoSlice.reducer;
