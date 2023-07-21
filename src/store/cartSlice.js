import { createSlice } from "@reduxjs/toolkit";

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
      console.log(copy);
      return copy;
    },

    // 삭제하기
    deleteItem(state, action) {
      const idx = state.findIndex((item) => {
        return item.id === action.payload;
      });
      let copy = [...state];
      copy.splice(idx, 1);
      return copy;
    },
  },
});

export let { plus, addToCart, deleteItem } = cartData.actions;

export default cartData;
