import React from 'react';
import './Wrapper.scss';
import everything from '../../Assets/Images/everything.png';
import userInterface from '../../Assets/Images/userInterface.png';
import teachers from '../../Assets/Images/teachers.png';
import chatting from '../../Assets/Images/chatting.png';
import users from '../../Assets/Images/users.png';

const Wrapper = () => {
    return (
        <div className='wrapper'>
            <div className="container">
                <div className="wrapper__div">
                    <nav className='wrapper__nav1'>
                        <h3 className='wrapper__heading'>Everything you can do in a physical classroom, <span className='wrapper__span'>you can do with Skilline</span></h3>
                        <p className='wrapper__text'>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                        <a className='wrapper__link' href="/">Learn more</a>
                    </nav>
                    <nav className='wrapper__nav'>
                        <img className='wrapper__img' src={everything} alt="everything" />
                    </nav>
                </div>

                <h3 className='wrapper__header'>Our <span className='wrapper__span'>Features</span></h3>
                <p className='wrapper__desc'>This very extraordinary feature, can make learning activities more efficient</p>

                <div className="wrapper__sections">
                    <section className='wrapper__section'>
                        <img className='wrapper__image' src={userInterface} alt="userInterface" />
                    </section>
                    <section className='wrapper__section1'>
                        <h4 className='wrapper__section--heading'>A <span className='wrapper__span'>user interface</span> designed for the classroom</h4>
                        <ul className='wrapper__list'>
                            <li className='wrapper__item'>
                                <img className='wrapper__section--img' src={teachers} alt="teachers" />
                                <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                            </li>
                            <li className='wrapper__item'>
                                <img className='wrapper__section--img' src={chatting} alt="chatting" />
                                <p>TA’s and presenters can be moved to the front of the class.</p>
                            </li>
                            <li className='wrapper__item'>
                                <img className='wrapper__section--img' src={users} alt="users" />
                                <p>Teachers can easily see all students and class data at one time.</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
