import React, {Fragment} from 'react';
import NewsletterWidget from "../widget/NewsletterWidget";
import ContactWidget from "../widget/ContactWidget";
import CompanyWidget from "../widget/CompanyWidget";
import PaymentWidget from "../widget/PaymentWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/**
 * footer component
 * @returns {*}
 * @constructor
 */
function Footer() {

    return (
        <Fragment>
            {/* start site-footer */}
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="upper-wrapper">
                        <div className="logo-col">
                            <a href='/' className='logo'>
                                <img src='https://styleshifter.app/wp-content/uploads/2022/03/icon_s-2.png'></img>
                            </a>
                            
                        </div>
                        <div className='text-col'>
                            <h2 className='footer-text'>
                                <a href='#'>Privacy Policy</a>
                            </h2>
                            <h2 className='footer-text'>
                                <a href='#'>Terms of Use</a>
                            </h2>
                            <h2 className='footer-text'>
                                <a href='#'>FAQ</a>
                            </h2>
                        </div>
                        <div className='icon-col'>
                            <div className='facebook'>
                                <a href='https://www.facebook.com/styleshifterai'><FontAwesomeIcon icon={faFacebook} color='#ffff' size='sm'/></a>
                            </div>
                            <div className='instagram'>
                                <a href='https://www.instagram.com/styleshifter_app?igsh=MzRlODBiNWFlZA=='><FontAwesomeIcon icon={faInstagram} color='#ffff' size='sm'/></a>
                            </div>
                            <div className='linkedin'>
                                <a href='http://linkedin.com/company/style-shifter'><FontAwesomeIcon icon={faLinkedin} color='#ffff' size='sm'/></a>
                            </div>
                        </div>
                    </div>
                    <div className='low-wrapper'>
                        <div className='copyright'>
                            <h3>Copyright © 2024 Style Shifter. All rights reserved.</h3>
                        </div>
                        <div className='contact-info'>
                            <h3>info@styleshifter.app</h3>
                        </div>
                    </div>
                </div>
            </footer>
            {/* end site-footer */}
        </Fragment>
    );
}


export default Footer;