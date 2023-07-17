import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 컴포넌트의 Lifecycle - 이걸 배우면 이 과정에 코드실행 가능
// 1. 페이지에 장착 mount
// 2. 업데이트 update
// 3. 제거 unmount

function Detail(props) {
  // #1. useEffect 쓰는 이유
  // useEffect 안에 있는 코드는 html 랜더링 후 동작. => 오래걸리는 작업들을 useEffect안에 넣어두면, html 랜더 이후, 동작하기에 html 랜더링 속도를 더 빠르게 할 수 있다.
  // useEffect 안에 적는 코드
  // 1. 어려운 연산
  // 2. 서버에서 데이터 가져오는 작업
  // 3. 타이머 장착하는거

  // #2. 이름이 Effect인 이유
  // side Effect 코드들을 보관하는 곳이니까
  useEffect(() => {
    // mount, update시 여기 코드 실행
    // 두번 실행 싫으면, index.js <React.StrictMode>없애기
    setTimeout(() => {
      setAlertShow(false);
    }, 2000);
  });

  let [count, setCount] = useState(0);
  let [alertShow, setAlertShow] = useState(true);
  let { id } = useParams();
  return (
    <div className="container">
      {/* 2초후 div숨기기 */}
      {alertShow === true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseFloat(id) + 1
            }.jpg`}
            alt=""
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
