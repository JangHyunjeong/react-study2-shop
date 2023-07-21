import { configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import cartData from "./store/cartSlice";

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
    user: user.reducer,
  },
});
