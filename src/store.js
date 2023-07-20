import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cartData = createSlice({
  name: "cartData",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plus(state, action) {
      let target = state.find((item) => {
        return item.id === action.payload;
      });
      let targetIndx = state.indexOf(target);
      state[targetIndx].count = state[targetIndx].count + 1;
    },
  },
});

export let { plus } = cartData.actions;

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
    user: user.reducer,
  },
});
