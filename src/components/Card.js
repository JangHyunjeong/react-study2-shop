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
export default Card;
