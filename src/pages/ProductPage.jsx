import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';
import shopPay from '../assets/images/shopPay.png';
import {FaCheck} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useEffect,useState } from "react";
import { Context } from '../utils/MainContext';
function ProductPage() {
    //Global states
    const {addToCart}=useContext(Context);
    const[single,setSingle]=useState({});
    const {productID}=useParams();
    useEffect(()=>{
    getSingleData()
    },[])
    const getSingleData=async()=>{
        await axios
        .get(`${process.env.REACT_APP_SINGLE_PRODUCT}/${productID}`)
        .then((res)=>{
            setSingle(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const[data,setData]=useState([]);
    useEffect(()=>{
    getData()
    },[])
    const getData=async()=>{
        await axios.get(process.env.REACT_APP_ALL_PRODUCTS)
        .then((res)=>{
        setData(res.data.slice(0,4));
        })
        .catch((err)=>{
        console.log(err);
        })
        
    };
    return (
    <>
    <main>
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="pictures">
                        <div className="top">
                        <img src={`${process.env.REACT_APP_PRODUCT_IMG}${single.productImage}`} alt={single.name} />
                        </div>
                        <div className="bottom">
                        <img src={`${process.env.REACT_APP_PRODUCT_IMG}${single.productImage}`} alt={single.name} />
                        </div>
                    </div>
                    <div className="info-box">
                        <p>The Fashion Shop</p>
                        <div className="heading">
                            <h2>{single.name}</h2>
                        </div>
                        <p className="price">£{single.price} GBP</p>
                        <p className='link'>Tax included. <Link to="/" className='link' id="link">Shipping</Link> calculated at checkout.</p>
                        <div className="quantity">
                            <p>Quantity</p>
                            <div className="box">
                                <div className="down">-</div>
                                <div className="amount">1</div>
                                <div className="up">+</div>
                            </div>
                        </div>
                        <button className="button" onClick={()=>addToCart(single)}>Add to cart</button>
                        <button className="button shopPay"><span className="word">Buy with</span> <img src={shopPay} alt="shopPay" /></button>
                        <Link to="/" className='detail-payment'>More payment options</Link>
                        <p className='delivery'><FaCheck className='icon'/> Pickup available at 34 High Street</p>
                        <p className='delivery second'>Usually ready in 24 hours</p>
                        <Link to="/" className='view'>View store information</Link>
                        <div className="info">
                            <p>{single.details} </p>
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
                            <Card data={item} key={item.id}/>
                        ))
                    }    
                </div>
                </div>
            </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default ProductPage