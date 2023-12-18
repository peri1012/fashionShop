import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';
import shopPay from '../assets/images/shopPay.png';
import {FaCheck} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FaWindowClose} from 'react-icons/fa';
import axios from "axios";
import { useEffect,useState } from "react";
import { Context } from '../utils/MainContext';
function ProductPage() {
    //Global states
    const { addToCartPage}=useContext(Context);
    const {productID}=useParams();
    const[single,setSingle]=useState({
        productImage: `uploads/item${productID}.webp`
    });
    

    useEffect(()=>{
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
    getSingleData()
    },[productID])
    
    //Recommended cards
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
    
    //Increase-decrease
    const[quantity,setQuantity]=useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    //Share Link Function
    
    const openShareDialog = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Share this product',
              text: `Check out ${single.name} on The Fashion Shop.`,
              url: window.location.href,
            });
          } catch (error) {
            console.error('Error sharing:', error);
          }
        }else {
            alert('Sharing is not supported in this browser.');
        }
      };
      useEffect(()=>{
        },[])
      //Right-side 
      const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

    return (
    <>
    <main>
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="pictures">
                        <div className="top">
                            <img src={`${'http://localhost:5000'}/${single.productImage}`} alt={single.name} />
                        </div>
                        <div className="bottom">
                            <img src={`${'http://localhost:5000'}/${single.productImage}`} alt={single.name} />
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
                                <div className="down" onClick={decreaseQuantity}>-</div>
                                <div className="amount">{quantity}</div>
                                <div className="up" onClick={increaseQuantity}>+</div>
                            </div>

                        </div>
                        <button className="button" onClick={()=>addToCartPage(single)}>Add to cart</button>
                        <button className="button shopPay"><span className="word">Buy with</span> <img src={shopPay} alt="shopPay" /></button>
                        <Link to="/" className='detail-payment'>More payment options</Link>
                        <p className='delivery'><FaCheck className='icon'/> Pickup available at 34 High Street</p>
                        <p className='delivery second'>Usually ready in 24 hours</p>
                        <button className='view btn link' onClick={() => setIsRightMenuOpen(!isRightMenuOpen)}>View store information</button>
                        <div className={`right-menu ${isRightMenuOpen ? 'open' : ''}`} id="rightMenu">
                            <div className="right-menu-content">
                                <h2>{single.name}</h2>
                                <FaWindowClose onClick={() => setIsRightMenuOpen(false)} />
                                <div className="info">
                                    <h2>34 High Street</h2>
                                    <p className='delivery'><FaCheck className='icon'/> Pickup available ,usually ready in 24 hours</p>
                                    <ul className="contact">
                                        <li>34 High Street</li>
                                        <li>Warsop NG20 0AE</li>
                                        <li>United Kingdom</li>
                                        <li>+441623842838</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <p>{single.details} </p>
                            <p>It measures approx 34" and has an extender. </p>
                        </div>
                        <button className='share btn'  onClick={openShareDialog}><FontAwesomeIcon icon={faArrowUpFromBracket}/><span>Share</span></button>
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