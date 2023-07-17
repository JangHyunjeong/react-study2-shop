import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let [count, setCount] = useState(0);
  let [alertShow, setAlertShow] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    // useEffect함수 마지막엔 ,[] 이렇게 생긴 dependency를 추가할 수 있는데,
    // 1. [state] 여기 안에 있는 state가 변할때만 실행해달라는 조건을 거는거다.
    // 2. [] 이런식으로 비워드면 mount에만 실행됨
    // 아래의 식은, []를 붙여줘야 업데이트 될때마다 setTimeOut이 안붙으니까, []붙여야함
    let timer = setTimeout(() => {
      setAlertShow(false);
    }, 2000);
    return () => {
      // useEffect 동작 전에 실행됨.
      // 별명 : clean up 함수 :  기존 코드 제거하는 코드
      // 1. 타이머 함수같은거 제작시, 기존 타이머 제거하는 용도로 많이 씀.
      // 2. 데이터 요청시, 기존 데이터 요청은 제거하는 용도 (데이터 불러오는 중, 업데이트 발생하면 불러달라 요청 중복되면서 데이터 이상해질수 있으니까)
      // 참고 ) mount시 실행안됌, unmount시 실행됨
      clearTimeout(timer);
    };
  }, []);

  let [prdCount, setPrdCount] = useState(0);

  useEffect(() => {
    if (isNaN(prdCount) === true) {
      alert("숫자만 쓰셈");
    }
  }, [prdCount]);

  // useEffect 사용법 정리
  // 1. 재랜더링마다 코드 실행하고싶으면 여기에 코드 작성
  // useEffect(()=>{})

  // 2. mount시 1회 코드 실행
  // useEffect(()=>{}, [])

  // 3. unmount시 1회 코드 실행
  // useEffect(()=>{
  //  return ()=>{ 여기 코드 작성}
  // }, [])

  // 4. 언제나 코드 실행전에 실행하고픈 코드가 있으면,
  // return ()=>{ 여기 코드 작성}

  // 5. 특정 state변경시에만 실행
  // useEffect(()=>{}, [state명])

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
          <div className="pt-4">
            <label>수량</label>
            <input
              type="text"
              onChange={(e) => {
                setPrdCount(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
