import Footer from "../components/Footer"
import Header from "../components/Header"
import Card from '../components/Card';
import {Link} from 'react-router-dom';

function Cart() {
  return (
    <>
        <Header/>
        <section className="cart-first-part">
            <div className="container">
                <div className="row">
                <div className="first-part">
                    <div className="heading">
                        <p>Your cart is empty</p>
                    </div>
                    <div className="btn">
                        <Link to="/catalogue" className="button">Continue Shopping</Link>
                    </div>
                    <div className="question">
                        <p>Have an account?</p>
                    </div>
                    <div className="info">
                        <p><Link to="/login" className="logIn">Log in</Link> to check out faster.</p> 
                    </div>
                </div>
                </div>
            </div>

        </section>
        <section className="cart-middle-part">
            <div className="container">
                <div className="row">
                    <div className="second-part">
                        <div className="heading">
                            <p>Featured collection</p>
                        </div>
                        <div className="cards">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <div className="btn">
                            <Link to="/catalogue" className="button">View all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    
    </>
  )
}

export default Cart