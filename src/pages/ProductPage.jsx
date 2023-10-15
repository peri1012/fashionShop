import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import card1 from '../assets/images/card1.webp';
import shopPay from '../assets/images/shopPay.png';
import {FaCheck} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
function ProductPage() {
  return (
    <>
    <Header/>
    <main>
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="pictures">
                        <div className="top">
                        <img src={card1} alt="Card 1" />
                        </div>
                        <div className="bottom">
                        <img src={card1} alt="Card 1" />
                        </div>
                    </div>
                    <div className="info-box">
                        <p>The Fashion Shop</p>
                        <div className="heading">
                            <h2>Envy silver squares with grey stones necklace</h2>
                        </div>
                        <p className="price">£22.00 GBP</p>
                        <p className='link'>Tax included. <Link to="/" className='link' id="link">Shipping</Link> calculated at checkout.</p>
                        <div className="quantity">
                            <p>Quantity</p>
                            <div className="box">
                                <div className="down">-</div>
                                <div className="amount">1</div>
                                <div className="up">+</div>
                            </div>
                        </div>
                        <button className="button">Add to cart</button>
                        <button className="button shopPay"><span className="word">Buy with</span> <img src={shopPay} alt="shopPay" /></button>
                        <Link to="/" className='detail-payment'>More payment options</Link>
                        <p className='delivery'><FaCheck className='icon'/> Pickup available at 34 High Street</p>
                        <p className='delivery second'>Usually ready in 24 hours</p>
                        <Link to="/" className='view'>View store information</Link>
                        <div className="info">
                            <p>On a stunning chain, this designer inspired necklace has a series of open style square pendants adorned with faceted grey stones for added sparkle. With it's versatile longline design, this necklace adds a touch of glamour to any outfit, making it perfect for both formal occasions and everyday wear. </p>
                            <p>It measures approx 34" and has an extender. </p>
                        </div>
                        <Link className='share'><FontAwesomeIcon icon={faArrowUpFromBracket}/><span>Share</span></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="offer">
            <div className="container">
            <div className="row">
                <div className="content">    
                <div className="heading">
                    <h2>You may also like</h2>
                </div>
                <div className="cards">
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/>     
                </div>
                </div>
            </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default ProductPage