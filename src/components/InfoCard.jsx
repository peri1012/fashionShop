import Gift from '../assets/images/gift.webp';
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
function InfoCard() {
  return (
    <div className="info-card">
        <div className="image">
            <img src={Gift} alt="gift" />
        </div>
        <div className="info-details">
            <p className="heading">Gift cards now available</p>
            <p className="detail">looking to give the perfect gift? Our gift cards can be spent online or in store. Available in £10, £25, £50 and £100, why not send somebody special an email gift and let them choose from our fabulous range!</p>
            <Link to="/">
                shop here <span><i className="icon"><FaArrowRight/></i></span>
            </Link>
        </div>
    </div>
  )
}

export default InfoCard