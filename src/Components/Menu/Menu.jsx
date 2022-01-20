import React from 'react';
import './Menu.scss';
import toolsGirl from '../../Assets/Images/toolsGirl.png';
import italy from '../../Assets/Images/italy.png';
import management from '../../Assets/Images/management.png';
import one from '../../Assets/Images/one.png';
import oneDrive from '../../Assets/Images/oneDrive.png';
import drop from '../../Assets/Images/drop.png';
import googleDrive from '../../Assets/Images/googleDrive.png';
import Timage from '../../Assets/Images/Timage.png';
import line from '../../Assets/Svg/line.svg';
import testimonials from '../../Assets/Images/testimonials.png';

const Menu = () => {
    return (
        <menu className='menu'>
            <div className="container">
                <div className="menu__div">
                    <nav className="menu__nav">
                        <h2 className='menu__heading'><span className='menu__span'>Tools</span> For Teachers And Learners</h2>
                        <p className='menu__text'>Class has a dynamic set of teaching tools built to be deployed and used during class.
Teachers can handout assignments in real-time for students to complete and submit.</p>
                    </nav>
                    <nav className="menu__nav1">
                        <img className='menu__img' src={toolsGirl} alt="toolsGirl" />
                    </nav>
                </div>

                <div className="menu__div menu__second">
                <nav className="menu__nav1">
                        <img className='menu__img' src={italy} alt="toolsGirl" />
                    </nav>  
                    <nav className="menu__nav">
                        <h2 className='menu__heading'>Assessments, <span className='menu__span'>Quizzes</span>, Tests</h2>
                        <p className='menu__text'>Easily launch live assignments, quizzes, and tests.Student results are automatically entered in the online gradebook.</p>
                    </nav>
                </div>


                <div className="menu__div">
                    <nav className="menu__nav">
                        <h2 className='menu__heading'><span className='menu__span'>Class Management</span> Tools for Educators</h2>
                        <p className='menu__text'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                    </nav>
                    <nav className="menu__nav1">
                        <img className='menu__img' src={management} alt="toolsGirl" />
                    </nav>  
                </div>

                <div className="menu__div menu__second">
                    <nav className="menu__nav1">
                        <img className='menu__img' src={one} alt="toolsGirl" />
                    </nav>  
                    <nav className="menu__nav">
                        <h2 className='menu__heading'>One-on-One <span className='menu__span'>Discussions</span></h2>
                        <p className='menu__text'>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                    </nav>
                </div>


                <a className='menu__link' href="/">See more features</a>


                <div className="menu__div2">
                    <nav className="menu__nav2">
                        <img className='floating' src={oneDrive} alt="image" />
                        <img className='floating' src={drop} alt="image" />
                        <img className='floating' src={googleDrive} alt="image" />
                        <img className='floating' src={Timage} alt="image" />
                    </nav>  
                    <nav className="menu__nav">
                        <p className='menu__p'><img src={line} alt="line" />INTEGRATIONS</p>
                        <h2 className='menu__heading'>200+ educational tools and platform <span className='menu__span'>integrations</span></h2>
                        <p className='menu__text'>Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                        <a className='menu__btn' href="/">See All Integrations</a>
                    </nav>
                </div>


                

                <div className="menu__div3">
                    <nav className="menu__nav menu__navbar">
                    <p className='menu__p'><img src={line} alt="line" />TESTIMONIAL</p>
                        <h2 className='menu__heading'>What They Say?</h2>
                        <p className='menu__text'>Skilline has got more than 100k positive ratings from our users around the world. </p>
                        <p className='menu__text'>Some of the students and teachers were greatly helped by the Skilline.</p>
                        <p className='menu__text'>Are you too? Please give your assessment</p>
                        <a className='menu__btn' href="/" >Write your assessment </a>
                    </nav>
                    <nav className="menu__nav1">
                        <img className='menu__img' src={testimonials} alt="toolsGirl" />
                    </nav>  
                </div>

            </div>
        </menu>
    );
}

export default Menu;
