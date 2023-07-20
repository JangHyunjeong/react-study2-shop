import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

// redux 사용하면 컴포넌트들이 props 없이 state 공유 가능

function Cart() {
  // 3. redux store 의 store 가져오기 - useSelector
  let cartData = useSelector((state) => {
    return state.cartData;
  });

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
          {cartData.map(function (item, idx) {
            return (
              <tr key={item.id}>
                <td>{idx}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
