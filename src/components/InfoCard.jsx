
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
function InfoCard({ imageSrc, heading, detail, linkTo, linkPage }) {
  return (
    <div className="info-card">
        <div className="img-box">
          <div className="image">
              <img src={imageSrc} alt={heading} />
          </div>
        </div>
        <div className="info-details">
            <p className="heading">{heading}</p>
            <p className="detail">{detail}</p>
            <Link to={linkPage} className='link'>
                {linkTo} <span><i className="icon"><FaArrowRight/></i></span>
            </Link>
        </div>
    </div>
  )
}

export default InfoCard