import React from 'react';
import './Box.scss';
import google from '../../Assets/Images/google.png';
import netflix from '../../Assets/Images/netflix.png';
import airbnb from '../../Assets/Images/airbnb.png';
import amazon from '../../Assets/Images/amazon.png';
import facebook from '../../Assets/Images/facebook.png';
import grab from '../../Assets/Images/grab.png';
import billing from '../../Assets/Images/billing.png';
import scheduling from '../../Assets/Images/scheduling.png';
import customer from '../../Assets/Images/customer.png';

const Box = () => {
    return (
        <div className='box'>
            <div className="container">
            <h2 className='box__heading'>Trusted by 5,000+ Companies Worldwide</h2>
            <ul className='box__list'>
                <li className='box__item'><img className='box__img' src={google} alt="google" /></li>
                <li className='box__item'><img className='box__img' src={netflix} alt="netflix" /></li>
                <li className='box__item'><img className='box__img' src={airbnb} alt="airbnb" /></li>
                <li className='box__item'><img className='box__img' src={amazon} alt="amazon" /></li>
                <li className='box__item'><img className='box__img' src={facebook} alt="facebook" /></li>
                <li className='box__item'><img className='box__img' src={grab} alt="grab" /></li>
            </ul>


            <h3 className='box__header'>All-In-One <span className='box__span'>Cloud Software.</span></h3>
            <p className='box__text'>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>

            <ul className='box__submenu'>
                <li className='box__subitem'>
                    <img className='box__image floating' src={billing} alt="billing" />
                    <h4 className='box__subheading'>Online Billing, Invoicing, & Contracts</h4>
                    <p className='box__desc'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </li>
                <li className='box__subitem'>
                    <img className='box__image floating' src={scheduling} alt="scheduling" />
                    <h4 className='box__subheading'>Easy Scheduling & Attendance Tracking</h4>
                    <p className='box__desc'>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                </li>
                <li className='box__subitem'>
                    <img className='box__image floating' src={customer} alt="customer" />
                    <h4 className='box__subheading'>Customer Tracking</h4>
                    <p className='box__desc'>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </li>
            </ul>

            <div className="box__div">
            <h3 className='box__header2'>What is <span className='box__span'>Skilline?</span></h3>
            <p className='box__text2'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            <ul className='box__div--list'>
                <li className='box__submenu--item'>
                        <h4 className='box__paragraph'>FOR INSTRUCTORS</h4>
                        <a className='box__link' href="/">Start a class today</a>
                </li>
                <li className='box__submenu--item2'>
                        <h4 className='box__paragraph'>FOR STUDENTS</h4>
                        <a className='box__link2' href="/">Enter access code</a>
                </li>
            </ul>
            </div>
            </div>
        </div>
    );
}

export default Box;
