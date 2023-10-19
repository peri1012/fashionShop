import { Link } from "react-router-dom";
function Card({data}) {
  return (
    <div className="card">
        <div className="card-img">
            <Link to={`/product-page/${data.id}`}><img src={`${'http://localhost:5000'}/${data.productImage}`} alt={data.name}/></Link>
        </div>
        <div className="card-content">
            <Link to="/" className="title">{data.name}</Link>
            <p className="price">{data.price}GBP</p>
        </div>
    </div>
  )
}

export default Card;

