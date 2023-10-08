import {Link} from 'react-router-dom';

function Find() {
  return (
    <section className='find'>
        <div className="container">
            <div className="row">
                <div className="find-card">
                    <div className="heading">
                        <p>Welcome to The Fashion Shop</p>
                    </div>
                    <ul className="adresses">
                        <li className="item">34 High Street</li>
                        <li className="item">Warsop</li>
                        <li className="item">Nottinghamshire</li>
                        <li className="item">NG20 0AE</li>
                    </ul>
                    <div className="detail">
                        <p>Our shop is open Monday to Saturday 9am to 5pm excluding Bank Holidays. You’re guaranteed a warm welcome by our team. Orders placed on our website are despatched Monday to Friday. If you have chosen to collect from our shop you can do so during the hours above once you have received notification that your order is ready to pick up.</p>
                    </div>
                    <div className="btn">
                        <Link to="/" className="button">Directions</Link>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Find