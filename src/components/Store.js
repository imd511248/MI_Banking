import { configureStore } from "@reduxjs/toolkit";
import addSlice from "../components/features/addData/AddSlice";

export const store = configureStore({
  reducer: {
    userDetails: addSlice,
  },
});
