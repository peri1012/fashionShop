
import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <>
    <main>
      <section className="not-found">
          <div className="container">
              <div className="row">
              <div className="first-part">
                <p className="error">404</p>
                  <div className="heading">
                      <p>Page Not Found</p>
                  </div>
                  <div className="btn">
                      <Link to="/catalogue" className="button">Continue Shopping</Link>
                  </div>
              </div>
              </div>
          </div>
      </section>
    </main>
    

</>
  )
}

export default NotFound