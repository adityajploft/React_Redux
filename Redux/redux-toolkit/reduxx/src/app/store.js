import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSlice";
// import showSlice from "../features/showSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
      // showData:showSlice
  },
});
