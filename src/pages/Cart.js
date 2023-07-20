import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// 3. 만든 함수 import
import { changeName } from "../store";

// redux 사용하면 컴포넌트들이 props 없이 state 공유 가능

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  // 4. useDispatch : store.js 에 요청을 보내주는 함수
  let dispatch = useDispatch();

  return (
    <div>
      {state.user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
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
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
