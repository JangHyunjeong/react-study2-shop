import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data/shoes";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./view/detail";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <br />
      <Link to="/detail">상세페이지</Link>

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
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`}
        alt="신발"
        width="100%"
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </div>
  );
}

export default App;
