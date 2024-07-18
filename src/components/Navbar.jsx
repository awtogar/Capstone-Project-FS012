import { Link } from 'react-router-dom';
import AppLogo from '../assets/images/logo.png';

function Navbar() {
    return (
        <header className="header">
            <nav className="header__navbar">
                <div className="header__container">
                    <input className="header__checkbox" type="checkbox" name="navCheckBox" id="navCheckBox" />
                    <div className="header__hamburger">
                        <span className="header__line header__line--1"></span>
                        <span className="header__line header__line--2"></span>
                    </div>
                    <div className="header__logo">
                        <img src={AppLogo} alt="App Logo" className="header__logo-image" />
                        <Link to="/" className="header__logo-text">Epic Indonesia</Link>
                    </div>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <Link to="/" className="header__menu-link">Home</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/#Explore" className="header__menu-link">Gallery</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/" className="header__menu-link">Contact</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/" className="header__menu-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
