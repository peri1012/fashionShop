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
import axios from "axios";
import { useEffect,useState } from "react";
function ProductPage() {
    const[data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    await axios.get('http://localhost:5000/thefashionshop/products/')
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    
  };
  return (
    <>
    <Header/>
    <main>
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="pictures">
                        <div className="top">
                        <img src={`${'http://localhost:5000'}/${data.productImage}`} alt={data.name} />
                        </div>
                        <div className="bottom">
                        <img src={`${'http://localhost:5000'}/${data.productImage}`} alt={data.name} />
                        </div>
                    </div>
                    <div className="info-box">
                        <p>The Fashion Shop</p>
                        <div className="heading">
                            <h2>{data.name}</h2>
                        </div>
                        <p className="price">£{data.price} GBP</p>
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
                            <p>{data.details} </p>
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
                {
                        data.map(item=>(
                            <Card data={item}/>
                        ))
                    }    
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