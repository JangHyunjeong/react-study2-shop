import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import data from "./data/shoes";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import Card from "./components/Card";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  let [shoes, setShose] = useState(data);
  // 페이지 이동을 도와주는 함수
  let naviate = useNavigate();
  let [moreCount, setMoreCount] = useState(0);
  let [more, setMore] = useState(true);
  let [loading, setLoading] = useState(false);
  let [재고] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              naviate("/");
            }}
          >
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                naviate(-1);
              }}
            >
              뒤로가기
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                naviate(+1);
              }}
            >
              앞으로가기
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                naviate("/");
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                naviate("/detail");
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                naviate("/event");
              }}
            >
              이벤트
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                naviate("/event/one");
              }}
            >
              이벤트1
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                naviate("/event/two");
              }}
            >
              이벤트2
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                naviate("/cart");
              }}
            >
              장바구니
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {/* Route는 페이지라고 생각하면 됨. 페이지 갯수만큼 추가하기 */}
        <Route
          path="/"
          element={
            <div>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>

              <button
                type="button"
                onClick={() => {
                  shoes.sort((a, b) => {
                    if (a.title > b.title) return 1;
                    if (a.title < b.title) return -1;
                    return 0;
                  });
                  setShose([...shoes]);
                }}
              >
                가나다순
              </button>

              <div className="container">
                <div className="row">
                  {shoes.map(function (item, i) {
                    return <Card key={item.id} item={item}></Card>;
                  })}
                </div>

                {loading === true ? (
                  <div className="loading">로딩중입니다</div>
                ) : null}
              </div>

              {more === true ? (
                <button
                  type="button"
                  onClick={() => {
                    // 로딩중
                    setLoading(true);

                    // 1. get
                    if (moreCount === 0) {
                      axios
                        .get("https://codingapple1.github.io/shop/data2.json")
                        .then((result) => {
                          let shoesCopy = [...shoes, ...result.data];
                          setShose(shoesCopy);
                          setMoreCount(moreCount + 1);
                          // 로딩중 숨기기
                          setLoading(false);
                        })
                        .catch((error) => {
                          console.log(error);
                          // 로딩중 숨기기
                          setLoading(false);
                        });
                    } else if (moreCount === 1) {
                      axios
                        .get("https://codingapple1.github.io/shop/data3.json")
                        .then((result) => {
                          let shoesCopy = [...shoes, ...result.data];
                          setShose(shoesCopy);
                          setMoreCount(moreCount + 1);
                          setLoading(false);
                        })
                        .catch((error) => {
                          console.log(error);
                          setLoading(false);
                        });
                      setMore(false);
                    }

                    // 1. post
                    // axios.post('url', {data:Data});

                    // 2. ajax 요청 2개 다 성공 시
                    // Promise.all([axios.get("/url1"), axios.get("/ url2")])
                    // .then(()=>{})
                    // 원래 서버와 문자만 주고 받을 수 있다.
                    // 따옴표 쳐놓으면 array, object도 주고받기 가능 "{"name":"kim"}" - json

                    // 3. fetch 쓰면, 이런식으로 json 데이터 수정해줘야함 (axios는 자동으로 해줌)
                    // fetch("https://codingapple1.github.io/shop/data2.json")
                    //   .then((result) => result.json())
                    //   .then((data) => console.log(data));
                  }}
                >
                  더보기
                </button>
              ) : null}
            </div>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>로케이션</div>} />
        </Route>

        <Route
          path="event"
          element={
            <div>
              <h2>오늘의 이벤트</h2>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        {/* 404페이지 * 은 이 외의 모든것 */}
        <Route path="*" element={<div>404 없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      {/* nasted router를 보여줄 자리 */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
