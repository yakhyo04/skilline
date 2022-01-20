import React, {useState} from 'react';
import './Header.scss';
import watch from '../../Assets/Images/watch.png';
import girl from '../../Assets/Images/girl.png';
import img250k from '../../Assets/Images/250k.png';
import analytics from '../../Assets/Images/analytics.png';
import congrat from '../../Assets/Images/congrat.png';
import userClass from '../../Assets/Images/user-class.png';

const Header = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
    return (
        <header className='header'>
        <div className='container'>
        <div className="header__div">
        <nav style={{paddingLeft: "10px"}}>
        <a className='header__logo' href="/">Skilline</a>
        </nav>
        <nav className="header__nav">
        <ul className='header__list'>
        <li className='header__item'><a className='header__link' href="/">Home</a></li>
        <li className='header__item'><a className='header__link' href="/">Careers</a></li>
        <li className='header__item'><a className='header__link' href="/">Blog</a></li>
        <li className='header__item'><a className='header__link' href="/">About Us</a></li>
        <li className='header__item'><a className='header__link header__login' href="/">Login</a></li>
        <li className='header__item'><a className='header__link header__signup' href="/">Sign Up</a></li>
        </ul>
        <button className='toggle__btn' onClick={() => setToggleBtn(!toggleBtn)}>
        <i class="fas fa-bars"></i>
        </button>
        {toggleBtn ?
        <ul className='toggle__list'>
            <li className='toggle__item'><a className='toggle__link' href="/">Home</a></li>
        <li className='toggle__item'><a className='toggle__link' href="/">Careers</a></li>
        <li className='toggle__item'><a className='toggle__link' href="/">Blog</a></li>
        <li className='toggle__item'><a className='toggle__link' href="/">About Us</a></li>
        <li className='toggle__item'><a className='toggle__link header__login' href="/">Login</a></li>
        <li className='toggle__item'><a className='toggle__link header__signup' href="/">Sign Up</a></li>
        </ul> 
        : null
        }
       
        </nav>
        </div>

        <div className='header__menu'>
            <nav className='header__navbar'>
                <h1 className='header__heading'><span className='header__span'>Studying</span> Online is now much easier</h1>
                <p className='header__text'>Skilline is an interesting platform that will teach you in more an interactive way</p>
                <ul className='header__submenu'>
                    <li className='header__subitem'>Join for free</li>
                    <li className='header__work'><img className='header__watch' src={watch} alt="watch" /> Watch how it works</li>
                </ul>
            </nav>
            <nav className='header__navbar' style={{position: "relative"}}>
                <img className='header__girl'  src={girl} alt="" />
                <img className='header__img floating' src={img250k} alt="img" />
                <img className='header__userClass floating' src={userClass} alt="userClass" />
                <img className='header__analytics floating' src={analytics} alt="analytics" />
                <img className='header__congrat floating' src={congrat} alt="congrat" />
            </nav>
        </div>
        </div>
        </header>
        );
    }
    
    export default Header;
    