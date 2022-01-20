import React from 'react';
import './Main.scss';
import laptop from '../../Assets/Images/laptop.png';
import press from '../../Assets/Images/press.png';
import news from '../../Assets/Images/news.png';
import cat from '../../Assets/Images/cat.png';

const Main = () => {
    return (
        <main className='main'>
            <div className="container">
                <h2 className='main__heading'>Lastest News and Resources</h2>
                <p className='main__text'>See the developments that have occurred to Skillines in the world</p>
                <div className="main__div">
                    <nav className="main__nav">
                        <img className='main__laptop' src={laptop} alt="laptop" />
                        <p className='main__news'>NEWS</p>
                        <h4 className='main__title'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4>
                        <p className='main__desc'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <a className='main__link' href="/">Read more</a>
                    </nav>
                    <nav className="main__nav">
                        <ul className='main__list'>
                            <li className='main__item'>
                                <nav>
                                    <img className='main__img' src={press} alt="press" />
                                    <p className='main__btn'>PRESS RELEASE</p>
                                </nav>
                                <nav className='main__item--nav'>
                                    <h4 className='main__title2'>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h4>
                                    <p className='main__desc2'>Class Technologies Inc., the company that created Class,...</p>
                                </nav>
                            </li>
                            <li className='main__item'>
                                <nav>
                                    <img className='main__img' src={news} alt="news" />
                                    <p className='main__btn'>NEWS</p>
                                </nav>
                                <nav className='main__item--nav'>
                                <h4 className='main__title2'>Zoom’s earliest investors are betting millions on a better Zoom for schools</h4>
                                    <p className='main__desc2'>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                                </nav>
                            </li>
                            <li className='main__item'>
                                <nav>
                                    <img className='main__img' src={cat} alt="cat" />
                                    <p className='main__btn'>NEWS</p>
                                </nav>
                                <nav className='main__item--nav'>
                                <h4 className='main__title2'>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h4>
                                    <p className='main__desc2'>This year, investors have reaped big financial returns from betting on Zoom...</p>
                                </nav>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
    );
}

export default Main;
