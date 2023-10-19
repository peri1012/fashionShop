import { FaSearch, FaUser ,FaBox} from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';
import Logo from "../assets/images/logo.avif";
const Header = () => {
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
                <li className="icon"><Link to="/cart"><FaBox/></Link></li>
              </ul>
            </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header