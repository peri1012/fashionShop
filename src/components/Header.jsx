import { FaSearch, FaUser ,FaBox, FaWindowClose} from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';
import Logo from "../assets/images/logo.avif";
import { useContext, useState } from 'react';
import { Context } from '../utils/MainContext';
const Header = () => {
  //global states
  const {cart}=useContext(Context);
  //local states
  const[cartIsOpen, setCartIsOpen]=useState(false);
  return (
    <header className="header">
        <div className="row">
          <div className="header-top">
            <h1>Welcome to our store</h1>
          </div>
          <div className="header-middle">
            <div className="container">
              <div className="row">
              <div className="logo">
              <Link to="/"><img src={Logo} alt="logo" /></Link>
            </div>
            <nav className="navbar">
              <ul className="navList">
                <li className="navItem">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/catalogue">Catalogue</NavLink>
                </li>
              </ul>
            </nav>
            <div className="header-icon">
              <ul className="icons">
                <li className="icon"><FaSearch/></li>
                <li className="icon"><Link to="/login"><FaUser/></Link></li>
              </ul>
            </div>
            <div className="userArea">
              <div className="cart" onClick={() => setCartIsOpen(!cartIsOpen)}>
                <span className="count">0</span>
                <FaBox/>
              </div>
          </div>
          <div className={`cartBox ${cartIsOpen && "isOpen"}`}>
            <div className="cartHead">
              <h2>My Cart</h2>
              <FaWindowClose onClick={() => setCartIsOpen(false)} />
            </div>
            <ul className="cartList">
              {
                cart.map((item)=>(
                  <li className="cartItem" key={item.id}>
                <div className="carImg">
                  <img src={`${process.env.REACT_APP_PRODUCT_IMG}${item.productImage}`} alt={item.name} />
                </div>
                <div className="carInfo">
                  <p className="carTitle">{item.name}</p>
                </div>
                <div className="remove">
                  <p>Remove Car</p>
                </div>
              </li>
                ))
              }
              <Link to="/cart" className="button" onClick={() => setCartIsOpen(false)}>
                View on Cart <span className="quantity">(1)</span>
              </Link>
              <button className="button">Check Out</button>
              <Link to="/catalogue" className='detail-payment'>Continue Shopping</Link>
            </ul>
          </div>
          <div
            className={`overlay ${cartIsOpen && "isOpen"}`}
            onClick={() => setCartIsOpen(false)}
          ></div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header