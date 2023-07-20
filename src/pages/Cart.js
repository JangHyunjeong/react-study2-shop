import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

// redux 사용하면 컴포넌트들이 props 없이 state 공유 가능

function Cart() {
  // 3. redux store 의 store 가져오기 - useSelector
  let state = useSelector((state) => {
    return state;
  });
  console.log(state);
  // 3-1. useSelector 편하게 쓰려면..
  // return 자리에 쓰고싶은 store만 가져올수도 있다.
  // let state2 = useSelector((state2) => state.stock);

  // 컴포넌트간 공유가 필요 없으면 useState써도 됨

  return (
    <div>
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
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
