import { FaSearch,FaBox, FaWindowClose} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import Logo from "../assets/images/logo.avif";
import { useContext, useState,useEffect } from 'react';
import { Context } from '../utils/MainContext';
import {Auth} from '../utils/AuthContext';

const Header = () => {
  //global states
  const {cart}=useContext(Context);
  // local states
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const{userIn}=useContext(Auth);
  const navigate=useNavigate();

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    document.body.style.overflow = isSearchVisible ? 'visible' : 'hidden';
  };
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleProfileClick = () => {
    if (userIn) {
      navigate('/account');
    } else {
      navigate('/login');
    }
  };

  const [count,setCount]=useState(0)
  useEffect(()=>{
    const calcCartCount=()=>{
      const sum = new Set(cart.map((item) => item.id));
      const totalCount = sum.size;
      setCount(totalCount);
    }
    calcCartCount()
  },[cart])

  return (
    <header className="header"  >
        <div className="row">
        <div className="header-top">
            <h1>Welcome to our store</h1>
          </div>
          {!isSearchVisible && (
            <div className="header-middle">
            <div className="container">
              <div className="row">
              <div className="logo">
              <Link to="/"><img src={Logo} alt="logo" /></Link>
            </div>
            <nav className="navbar">
              <ul className="navList">
                <li className="navItem">
                  <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : null)}>Home</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/catalogue" className={({ isActive }) => (isActive ? 'active' : null)}>Catalogue</NavLink>
                </li>
              </ul>
            </nav>
            <div className="header-icon">
              <ul className="icons">
                <li className="icon" onClick={toggleSearch}><FaSearch/></li>
                <li className='icon'>
                  <button className='btn' onClick={handleProfileClick}>
                    <FontAwesomeIcon icon={faUser} className='color icon' />
                  </button>
                </li>
              </ul>
            </div>
            <div className="userArea">
              {userIn && (
                <div className="cart" onClick={() => setCartIsOpen(!cartIsOpen)}>
                  <span className="count">{count}</span>
                  <FaBox/>
                </div>
              )}
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
              </li>
                ))
              }
              <Link to="/cart" className="button" onClick={() => setCartIsOpen(false)}>
                View on Cart <span className="quantity">({count})</span>
              </Link>
              <Link to="/check-out" className="button">Check Out</Link>
              <Link to="/catalogue" className='detail-payment'>Continue Shopping</Link>
            </ul>
          </div>
          <div
            className={`overlay ${cartIsOpen && "isOpen"}`}
            onClick={() => setCartIsOpen(false)}
          >
              </div>
            </div>
          </div>
          </div>
          )}
          {isSearchVisible && (
                  <div className="search-input search-overlay ">
                    <input type="text" placeholder="Search" />
                    <FaWindowClose onClick={() => toggleSearch(true)} />
                  </div>
                )}
        </div>
    </header>
  )
}

export default Header