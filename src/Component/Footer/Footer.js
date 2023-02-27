import React, { Fragment } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

import "./Footer.css";

const Footer = () => {
    return ( 
        <Fragment>
            <div className='footer'>
                <section className='section'>
                    <h4>DORSIN</h4>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                    </ul>
                </section>
                <section className='section'>
                    <h4>Information</h4>
                    <ul>
                        <li>Terms & Condition</li>
                        <li>About us</li>
                        <li>Jobs</li>
                        <li>Bookmarks</li>
                    </ul>
                </section>
                <section className='section'>
                    <h4>Support</h4>
                    <ul>
                        <li>FAQ</li>
                        <li>Contact</li>
                        <li>Disscusion</li>
                    </ul>
                </section>
                <section className='section'>
                    <h4>Subscribe</h4>
                    <p>In an ideal world this text wouldn’t exist,
                         a client would acknowledge the importance of 
                         having web copy before the design starts.</p>
                    <div className='email_icon'>
                        <input type="email" placeholder="Email" />
                        <FaTelegramPlane className='telegramIcon'/> 
                    </div>
                </section>
            </div>
        </Fragment>
     );
}
 
export default Footer;