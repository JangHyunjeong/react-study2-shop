import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cartData = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    plus(state, action) {
      // 인덱스 더 쉽게 찾는법 findIndex
      // let idx = state.findIndex((a) => {
      //   return a.id === action.payload;
      // });
      const target = state.find((item) => {
        return item.id === action.payload;
      });
      const targetIndx = state.indexOf(target);
      state[targetIndx].count = state[targetIndx].count + 1;
    },
    addToCart(state, action) {
      // 중복체크
      const overlap = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state.length > 0) {
        if (overlap !== -1) {
          alert("이미 추가된 상품입니다");
          return state;
        }
      }
      // 중복 아닐때만 실행
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
