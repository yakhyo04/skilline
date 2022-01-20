import React from 'react';
import './Footer.scss';
import skillineLogo from '../../Assets/Images/skillineLogo.png';
import topLine from '../../Assets/Images/topLine.png';
import small from '../../Assets/Images/small.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <ul className='footer__menu'>
                    <li className='footer__item'>
                        <img src={skillineLogo} alt="skilllineLogo" />
                    </li>
                    <li className='footer__item'>
                        <img className='footer__topLine' src={topLine} alt="topLine" />
                    </li>
                    <li className='footer__item'>
                    Virtual Class for Zoom
                    </li>
                </ul>
                <p className='footer__text'>Subscribe to get our Newsletter</p>
                <form action="" className='footer__form'>
                    <input className='footer__input' type="text" placeholder='Your Email' />
                    <button className='footer__btn' type='submit'>Subscribe</button>
                </form>

                <div className="footer__div">
                    <a href="/" className='footer__link'>Careers</a>
                    <a href="/" className='footer__link'><img src={small} alt="" /></a>
                    <a href="/" className='footer__link'>Privacy</a>
                    <a href="/" className='footer__link'><img src={small} alt="" /></a>
                    <a href="/" className='footer__link'>Terms & Conditions</a>
                </div>

                <p className='footer__text'>© 2021 Class Technologies Inc. </p>
            </div>
        </footer>
    );
}

export default Footer;
