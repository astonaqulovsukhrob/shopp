import { configureStore } from "@reduxjs/toolkit";
import allUser from "./stored_reducer";

export const store = configureStore({
  reducer: {
    users_reducer: allUser,
  },
});
