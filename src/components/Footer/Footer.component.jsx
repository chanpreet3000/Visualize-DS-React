import './Footer.styles.css'
const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="main-footer__brand">
                <a href="https://github.com/chanpreet3000" target={"_blank"} rel="noreferrer">Made by - Chanpreet Singh</a>
            </div>
            <ul className="main-footer__items">
                <li className="main-footer__item">
                    <a href="https://www.linkedin.com/in/chanpreet3000/" target={"_blank"} rel="noreferrer">
                        <div>
                            <div className='main-footer__helper-image'></div>
                            <p className='main-footer__helper-text'>Linked In</p>
                        </div>
                    </a>
                </li>
                <li className="main-footer__item">
                    <a href="https://github.com/chanpreet3000" target={"_blank"} rel="noreferrer">
                        <div>
                            <div className='main-footer__helper-image'></div>
                            <p className='main-footer__helper-text'>Github</p>
                        </div>
                    </a>
                </li>
                <li className="main-footer__item">
                    <a href="https://play.google.com/store/apps/developer?id=Bavneet+Kaur" target={"_blank"} rel="noreferrer">
                        <div>
                            <div className='main-footer__helper-image'></div>
                            <p className='main-footer__helper-text'>Google Play Store</p>
                        </div>
                    </a>
                </li>
            </ul>
        </footer>
    )
};

export default Footer;