import {Link} from 'react-router-dom';
function SlideContent({  heading, detail, linkTo}) {
  return (
    <div className="slide-second">
          <div className="slide-second-content">
            <h2 className='heading'>{heading}</h2>
            <p className='info'>{detail}</p>
            <Link to="/catalogue" className="button">{linkTo}</Link>
          </div>
        </div>
  )
}
export default SlideContent;