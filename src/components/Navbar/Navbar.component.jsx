import './Navbar.styles.css'
const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="main-nav__brand">
                <div className="main-nav__brand-img"></div>
                <h1><a href='#'>Visualize DS</a></h1>
            </div>
            <ul className="main-nav__items">
                <li className="main-nav__item">
                    <a>
                        <h1>Download</h1>
                        <div className="main-nav__item-bottom"></div>
                    </a>
                </li>
                <li className="main-nav__item">
                    <a>
                        <h1>About Us</h1>
                        <div className="main-nav__item-bottom"></div>
                    </a>
                </li>
                <li className="main-nav__item">
                    <a>
                        <h1>Privay Policy</h1>
                        <div className="main-nav__item-bottom"></div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;