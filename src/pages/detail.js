import { useParams } from "react-router-dom";

// styled-componets 장점
// 1. CSS파일 안열어도 됨
// 2.스타일이 다른 js 파일로 오염되지 않음
// 컴포넌트.module.css 이런식으로 작명하면 걍 css써도 오염 방지 가능
// 3. 페이지 로딩시간 단축

// 단점
// 1. js파일 매우 복잡해짐
// 2. 중복스타일을 컴포넌트간 import할텐데 css와 다를바 없음
// 3. 협업시 css 담당의 숙련도 이슈
import styled from "styled-components";

// 스타일이 입혀진 컴포넌트 생성하는거임.
// let YellowBtn = styled.button`
//   background: yellow;
//   color: black;
//   padding: 10px;
// `;

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  padding: 10px;
`;
// 스타일 복제
let NewBtn = styled(YellowBtn)``;

function Detail(props) {
  let { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <YellowBtn bg="yellow">YellowBtn</YellowBtn>
          <NewBtn bg="blue">NewBtn</NewBtn>
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
