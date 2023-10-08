import { Link } from "react-router-dom"
import card1 from '../assets/images/card1.webp';
function Card() {
  return (
    <div className="card">
        <div className="card-img">
            <img src={card1} alt="Card 1" />
        </div>
        <div className="card-content">
            <Link to="/" className="title">Cream shaped hem with pockets jumper 12-18</Link>
            <p className="price">£30.00 GBP</p>
        </div>
    </div>
  )
}

export default Card