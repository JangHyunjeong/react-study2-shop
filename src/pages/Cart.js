import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "./../store/userSlice";
import { plus, deleteItem } from "./../store/cartSlice";
import { memo, useMemo, useState } from "react";

// 자식 컴포넌트 재랜더링 막기
// 1. memo
// 꼭 필요할때만 재렌더링 하려면 memo
// memo - props 가 변할때만 재랜더 해줌
let Child = memo(function () {
  console.log("재랜더링");
  return <div>자식임</div>;
});

// 2. useMemo
function 함수() {
  return 1;
}

function Cart() {
  //let result = 함수; // Cart가 랜더링 될때마다 실행됨

  // 컴포넌트 랜더링시 1회만 실행해줌 (useEffect와 같음)
  let result = useMemo(() => {
    return 함수();
  }, []);

  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return (
    <div>
      <Child></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {state.user.name} ({state.user.age})의 장바구니
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        이름바꾸기
      </button>
      <button
        onClick={() => {
          dispatch(changeAge(10));
        }}
      >
        열살 더먹기
      </button>
      {state.cartData.length === 0 ? (
        <div>장바구니가 비었습니다.</div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
              <th>삭제하기</th>
            </tr>
          </thead>
          <tbody>
            {state.cartData.map(function (item, idx) {
              return (
                <tr key={item.id}>
                  <td>{idx}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(plus(item.id));
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(deleteItem(item.id));
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Cart;
