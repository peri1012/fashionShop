import {Link} from 'react-router-dom';
function Hero() {
  return (
    <section className="hero-section">
      <div className="header-bottom">
            <div className="mobile">
              <span>Tel</span>
              <Link to="tel:01623 842838" className='number'>01623 842838</Link>
            </div>
      </div>
      <div className="hero">
      <div className="container">
            <div className="row">
                <div className="hero-box">
                  <h1>Shop our collection</h1>
                  <p>Our collection is vast with clothes and accessories. Browse our website and you'll be impressed by the selection and prices we offer.</p>
                  <Link to="/catalogue" className="button">Shop all</Link>
              </div>
            </div>
        </div>
      </div>
        
    </section>
  )
}

export default Hero;