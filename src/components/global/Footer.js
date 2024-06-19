import React, {Fragment} from 'react';
import NewsletterWidget from "../widget/NewsletterWidget";
import ContactWidget from "../widget/ContactWidget";
import CompanyWidget from "../widget/CompanyWidget";
import PaymentWidget from "../widget/PaymentWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';

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
                    <div className="row">
                        <div className="col-lg-2 col-xs-4  logo-col">
                            <a href='/' className='logo'>
                                <img src='https://styleshifter.app/wp-content/uploads/2022/03/icon_s-2.png'></img>
                            </a>
                            
                        </div>
                        <div className="col-lg-8 col-xs-16">
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
                        </div>
                        <div className="col-lg-2 col-xs-4 icon-col">
                            <div className='icon-wrapper'>
                                <div className='row'>
                                    <div className='col-lg-4 col-xs-8'>
                                        <a href='https://www.facebook.com/styleshifterai'><FontAwesomeIcon icon={faLinkSlash} color='#ffff' size='sm'/></a>
                                    </div>
                                    <div className='col-lg-4 col-xs-8'>
                                        <a href='https://www.instagram.com/styleshifter_app?igsh=MzRlODBiNWFlZA=='><FontAwesomeIcon icon={faLinkSlash} color='#ffff' size='sm'/></a>
                                    </div>
                                    <div className='col-lg-4 col-xs-8'>
                                        <a href='http://linkedin.com/company/style-shifter'><FontAwesomeIcon icon={faLinkSlash} color='#ffff' size='sm'/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-xs-12 text-left'>
                            <h3>Copyright © 2024 Style Shifter. All rights reserved.</h3>
                        </div>
                        <div className='col-lg-6 col-xs-12 text-right'>
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