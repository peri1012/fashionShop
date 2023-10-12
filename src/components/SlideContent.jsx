//Link
import {Link} from 'react-router-dom';
function SlideContent() {
  return (
    <div className="slide-second">
          <div className="slide-second-content">
            <h2 className='heading'>New In footwear</h2>
            <p className='info'>Discover our newest range of styles</p>
            <Link to="/" className="button">Shop now</Link>
          </div>
        </div>
  )
}
export default SlideContent;