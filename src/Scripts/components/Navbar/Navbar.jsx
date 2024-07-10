import AppLogo from '../../../assets/images/logo.png';

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
                        <a href="#" className="header__logo-text">Epic Indonesia</a>
                    </div>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link">Home</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link">Gallery</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link">Contact</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
