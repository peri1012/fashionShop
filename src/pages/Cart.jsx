import Card from '../components/Card';
import {Link} from 'react-router-dom';
import axios from "axios";
import { useContext, useEffect,useState } from "react";
import { Context } from "../utils/MainContext";
import {FaTrash} from 'react-icons/fa';
import ShopPay from '../assets/images/shopPay.png';
import payPal from '../assets/images/PayPal.svg';
import googlePay from '../assets/images/googlePay.png';
function Cart() {
    //Global states
    const {cart,setCart,removeFromCart}=useContext(Context);
    const[data,setData]=useState([])
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

    //Increase-decrease function
    const increaseQuantity = (id) => {
      const exiting=cart.find(item=>item.id===id)
      if(exiting){
       let increasedCart= cart.filter(product=>{
          if(product.id===exiting.id){
            return {...exiting, quantity:exiting.quantity++}
        
          }else{
            return product;
          }
        })
        setCart(increasedCart)
      }
    };
    const decreaseQuantity = (id) => {
      const exiting=cart.find(item=>item.id===id)
      if(exiting){
       let increasedCart= cart.filter(product=>{
          if(product.id===exiting.id && product.quantity>1){
              return {...exiting, quantity:exiting.quantity--}
            
          }else{
            return product;
          }
        })
        setCart(increasedCart)
      }
    };
    
  const [totalPrice, setTotalPrice]=useState(0)
  useEffect(()=>{
    const calcTotalPrice=()=>{
      const prices=cart.map((item)=>item.quantity*parseFloat(item.price));
      const total=prices.reduce((acc,curr)=>acc+curr,0)
      setTotalPrice(total)
    };
    calcTotalPrice();
  },[cart])
  return (
    <>
        <main>
        {cart.length === 0 ? (
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

        </section>): (
        <div className="container">
          <div className="row">
          <div className='table'>
            <div className="beginning">
              <div className="heading">
                  <h2>Your cart</h2>
              </div>
              <Link to="/catalogue" className='link'>Continue shopping</Link>
            </div>
          
          <div className='table-content'>
            <div className="title">
              <h2>Product</h2>
              <h2>Quantity</h2>
              <h2>Total</h2>
            </div>
            <tbody>
              {cart.map((item) => (
                <div key={item.id} className='list'>
                  <div className='product'>
                      <div className="cartImg">
                        <img src={`${process.env.REACT_APP_PRODUCT_IMG}${item.productImage}`} alt={item.name} />
                      </div>
                      <div className="detail">
                        <p>{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.price}</p>
                      </div>
                    </div>
                    <div className="quantity">
                      <div className="box">
                        <div className="down" onClick={() => decreaseQuantity(item.id)}>-</div>
                        <div className="amount">{item.quantity}</div>
                        <div className="up" onClick={() => increaseQuantity(item.id)}>+</div>
                      </div>
                      <FaTrash onClick={() => removeFromCart(item.id)} />
                    </div>
                    <div className='price'>
                      <p>£ {item.quantity * item.price}</p>
                    </div>
                </div>
              ))}
            </tbody>
          </div>     
          <div className="payment">
            <div className="left">
              <div className='heading'>Subtotal: <span className='price'>£ {totalPrice} GBP</span></div>
              <p className='link'>Tax included. <Link to="/err" className='link' id="link">Shipping</Link> calculated at checkout.</p>
              <button className="button">Check out</button>
              <div className="pays">
                <Link to="/err"><img src={ShopPay} alt="Shoppay" /></Link>
                <Link to="/err"><img src={payPal} alt="payPal" /></Link>
                <Link to="/err"><img src={googlePay} alt="googlePay" /></Link>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      )}
      
        <section className="cart-middle-part">
            <div className="container">
                <div className="row">
                    <div className="second-part">
                        <div className="heading">
                            <p>Featured collection</p>
                        </div>
                        <div className="cards">
                        {
                            data.map(item=>(
                                <Card data={item } key={item.id}/>
                            ))
                        }
                        </div>
                        <div className="btn">
                            <Link to="/catalogue" className="button">View all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
        
    
    </>
  )
}

export default Cart