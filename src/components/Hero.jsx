import {Link} from 'react-router-dom';
function Hero() {
  return (
    <section className="hero">
        <div className="container">
            <div className="row">
                <div className="hero-box">
                  <h1>Shop our collection</h1>
                  <p>Our collection is vast with clothes and accessories. Browse our website and you'll be impressed by the selection and prices we offer.</p>
                  <Link to="/catalogue" className="button">Shop all</Link>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;