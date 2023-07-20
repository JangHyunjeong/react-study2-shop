import { configureStore, createSlice } from "@reduxjs/toolkit";

// store 만들기
// 1. createSlice로 state 정의
// 이런 state 하나를 slice 라 부름
let user = createSlice({
  name: "user",
  initialState: "Kim",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    // 2. 여기에 등록해야 사용 가능
    // 작명 : state이름.reducer
    user: user.reducer,
    stock: stock.reducer,
  },
});
