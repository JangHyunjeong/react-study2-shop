import { useNavigate } from "react-router-dom";

function Watched(props) {
  let naviate = useNavigate();
  let ids = JSON.parse(localStorage.getItem("watched"));
  let shoes = null;

  if (ids !== null) {
    shoes = props.shoes.filter((item) => {
      return ids.includes(item.id);
    });
  }
  return (
    <div className="watched">
      <h3 className="">최근본상품</h3>
      <ul className="watched-list">
        {shoes !== null ? (
          shoes.map((item, idx) => {
            return (
              <li
                className="watched-card"
                key={item.id}
                onClick={() => {
                  naviate(`/detail/${item.id}`);
                }}
              >
                <img
                  src={`https://codingapple1.github.io/shop/shoes${
                    item.id + 1
                  }.jpg`}
                  alt=""
                />
                <p className="name">{item.title}</p>
                <p className="price">{item.price}</p>
              </li>
            );
          })
        ) : (
          <div>최근 본 상품이 없습니다</div>
        )}
      </ul>
    </div>
  );
}

export default Watched;
