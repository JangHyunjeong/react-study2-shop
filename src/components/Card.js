import { useNavigate } from "react-router-dom";
function Card(props) {
  let naviate = useNavigate();

  return (
    <div
      className="col-md-4"
      onClick={() => {
        naviate(`/detail/${props.item.id}`);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          parseFloat(props.item.id) + 1
        }.jpg`}
        alt="신발"
        width="100%"
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </div>
  );
}
export default Card;
