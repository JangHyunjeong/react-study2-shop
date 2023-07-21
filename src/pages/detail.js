import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav } from "react-bootstrap";
import { addToCart } from "./../store/cartSlice";

function Detail(props) {
  let [count, setCount] = useState(0);
  let [alertShow, setAlertShow] = useState(true);
  let { id } = useParams();
  let [tabNumber, setTabNumber] = useState(0);
  let [fade, setFade] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    let newData = [];
    if (JSON.parse(localStorage.getItem("watched")) !== null) {
      newData = JSON.parse(localStorage.getItem("watched"));
    }
    newData.unshift(parseFloat(id));
    newData = new Set(newData);
    newData = [...newData];
    localStorage.setItem("watched", JSON.stringify(newData));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 10);
    return setFade("");
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlertShow(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let [prdCount, setPrdCount] = useState(0);

  useEffect(() => {
    if (isNaN(prdCount) === true) {
      alert("숫자만 쓰셈");
    }
  }, [prdCount]);

  return (
    <div className={`container start ${fade}`}>
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
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addToCart(props.shoes[id]));
            }}
          >
            주문하기
          </button>
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTabNumber(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTabNumber(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTabNumber(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tabNumber={tabNumber} />
    </div>
  );
}

function TabContent(props) {
  // 탭 tabNumber가 변할때 end 부착
  let [fade, setFade] = useState("");

  // 리액트 automatic batching
  // state 변경하는 함수들이 근처에 있으면,
  // state변경 마지막에 재 랜더링
  useEffect(() => {
    let fade = setTimeout(() => {
      setFade("end");
    }, 10);

    return () => {
      clearTimeout(fade);
      setFade("");
    };
  }, [props.tabNumber]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0 </div>, <div>내용1</div>, <div>내용2</div>][props.tabNumber]}
    </div>
  );
}

export default Detail;
