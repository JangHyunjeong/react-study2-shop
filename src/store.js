import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cartData = createSlice({
  name: "cartData",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
    user: user.reducer,
  },
});
