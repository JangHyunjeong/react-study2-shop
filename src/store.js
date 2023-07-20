import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "Kim",

  // Redux state 변경하기
  // -state 수정해주는 함수 만들고, 원할때 그 함수 실행해 달라고 store.js에 요청
  // 1. state수정 함수 만들기
  reducers: {
    changeName(state) {
      return "john" + state;
    },
  },
});

// 2. 만든 함수 export - 오른쪽 자료를 변수로 뽑음
// export let {함수명} = user.actions
export let { changeName } = user.actions;

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
