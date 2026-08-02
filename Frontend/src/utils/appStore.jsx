import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import feedReducer from "../pages/feedSlice";

const appStore = configureStore({
  reducer: {
      user: userReducer,
      feed: feedReducer,

  },
});    

export default appStore;