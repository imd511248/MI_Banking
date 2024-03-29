import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async ({ obj }, { rejectWithValue }) => {
  try {
    if (obj !== "") {
      await axios.post(`https://65ca811f3b05d29307e06041.mockapi.io/bank/bank`, obj);
    }
    const response = await axios.get(`https://65ca811f3b05d29307e06041.mockapi.io/bank/bank`);
    return response.data;
  } catch (error) {
    // Handle errors using rejectWithValue
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
