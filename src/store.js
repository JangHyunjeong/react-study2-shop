import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cartData = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    plus(state, action) {
      const target = state.find((item) => {
        return item.id === action.payload;
      });
      const targetIndx = state.indexOf(target);
      state[targetIndx].count = state[targetIndx].count + 1;
    },
    addToCart(state, action) {
      const newData = {
        id: action.payload.id,
        name: action.payload.title,
        count: 1,
      };
      const copy = [...state, newData];
      return copy;
    },
  },
});

export let { plus, addToCart } = cartData.actions;

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
    user: user.reducer,
  },
});
