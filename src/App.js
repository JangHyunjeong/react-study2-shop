import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data/shoes";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Card from "./components/Card";
import Detail from "./pages/detail";

function App() {
  let [shoes] = useState(data);
  // 페이지 이동을 도와주는 함수
  let naviate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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

              <div className="container">
                <div className="row">
                  {shoes.map(function (item, i) {
                    return <Card key={item.id} i={i + 1} item={item}></Card>;
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail" element={<Detail />} />

        {/* Nasted Routes 전,
         <Route path="/about" element={<About />} />
        <Route path="/about/member" element={<About />} />
        <Route path="/about/location" element={<About />} /> */}

        {/* Nasted Routes 후, 
        nasted route 접속시엔 element 2개 보임 (about꺼, member꺼.. )
        > 어디에 보여줄지 작성해야함 <Outlet /> 이용
        */}
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
