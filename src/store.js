import { configureStore, createSlice } from "@reduxjs/toolkit";

// store 만들기
// 1. createSlice로 state 정의
// 이런 state 하나를 slice 라 부름
let cartData = createSlice({
  name: "cartData",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    // 2. 여기에 등록해야 사용 가능
    // 작명 : state이름.reducer
    cartData: cartData.reducer,
  },
});
