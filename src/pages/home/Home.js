import React from 'react';
import {useState, Fragment} from 'react';

import Header from '../../components/header/Header';
import Hero1 from '../../components/Hero/Hero1';
import FeaturedProducts from '../../components/products/FeaturedProducts';
import Categories from '../../components/categories/Categories';
import CtaSection from '../../components/CTA/CtaSection';
import RecentProducts from '../../components/products/RecentProducts';
import BestSeller from '../../components/products/BestSeller';
//import QuickView from '../../components/products/QuickView';
import QuickView from '../../components/measurement/QuickView';
import NewsletterPopup from '../../components/global/NewsletterPopup';
import Instagram from '../../components/global/Instagram';
import Footer from '../../components/global/Footer';

import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


/**
 * Home style 1
 * @param options
 * @returns {*}
 * @constructor
 */
function Home({ options }) {

    /**
     * state
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});

    /**
     * Handle Quick View Data
     * @param e
     * @param item
     * @constructor
     */
    const HandelQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
    };

    /**
     * Handle Quick View Close
     * @param e
     * @constructor
     */
    const HandelQuickViewClose = (e) => {
        e.preventDefault();
        setShowQuickView(false);
        setQuickViewData({});
    };

    return (
        <Fragment>
            {showQuickView
                ? <QuickView
                    data={quickViewData}
                    onQuickViewCloseClick={HandelQuickViewClose}
                />
                : ''
            }

            <Header options={options} />

            <section className='elevate-section'>
                <div className='elevate-container row'>
                    <div className='text-container col-md-5'>
                        <div className='title'>
                            <h2 className='title'>
                                Elevate Your Fashion E-commerce
                                <br/>
                                <i>with AI</i>
                            </h2>
                        </div>
                        <div className='description'>
                            <p>Boost sales and revolutionize customer experience with Style Shifter’s 
                                AI-powered shopping try-on assistant</p>
                        </div>
                        <div className='demo-container'>
                            <button type="button" class="btn btn-dark">Request a Demo</button>
                        </div>
                    </div>
                    <div className='img-container col-md-7'>
                        <img src='/assets/images/home/PNG-image-B0D35640C694-1.png'></img>
                    </div>
                </div>
            </section>
            <section className='our-services'>
                <h2>Our services</h2>
            </section>
            <section className='virtual-try-on-section'>
                <div className='virtual-try-on-container row'>
                    <div className='img-container col-md-6'>
                        <img src='/assets/images/home/SS-hero-banner.png'></img>
                    </div>
                    <div className='text-container col-md-6'>
                        <div className='title'>
                            <h2 className='title-small'>
                                Engage and Impress with Our State-of-the-Art Virtual Try-On Feature
                            </h2>
                        </div>
                        <div className='description'>
                            <p>Using advanced AI, customers can virtually try on outfits, 
                                ensuring a perfect fit and style, leading to better purchase decisions and lower return rates</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='style-recommendation-section'>
                <div className='row'>
                    <div className='text-container col-md-5'>
                        <div className='title-small'>
                            <h2 className='title'>
                                Deliver Personalized Style Recommendations with Cutting-Edge AI
                            </h2>
                        </div>
                        <div className='description'>
                            <p>Our AI algorithm analyzes customer data to offer personalized style 
                                and size suggestions, enhancing shopping experiences and increasing customer satisfaction</p>
                        </div>
                    </div>
                    <div className='img-container col-md-7'>
                        <img src='/assets/images/home/IMG_0710-min.png'></img>
                    </div>
                </div>
            </section>
            <section className='power-data-section'>
                <div className='row'>
                    <div className='img-container col-md-6'>
                        <img src='/assets/images/home/PNG-image-10EDC555E985-1.png'></img>
                    </div>
                    <div className='text-container col-md-6'>
                        <div className='title'>
                            <h2 className='title-small'>
                                Harness the Power of Data with Advanced Analytics
                            </h2>
                        </div>
                        <div className='description'>
                            <p>Gain valuable insights into customer preferences and trends, 
                                helping inform inventory and marketing strategies for optimal business growth</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='retail-success-section'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='benefits-wrapper row'>
                            <div className='icon col-md-1'>
                                <FontAwesomeIcon icon={faCheck} size='xl'/>
                            </div>
                            <div className='benefits col-md-11'>
                                <div className='title'>
                                    <h2 className='title-small'>
                                        Boost Your Sales
                                    </h2>
                                </div>
                                <div className='description'>
                                    <p>Leverage our AI-powered personalization to present the right products to the right customers,
                                        significantly increasing the likelihood of purchases and driving higher conversion rates</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='benefits-wrapper row'>
                            <div className='icon col-md-1'>
                                <FontAwesomeIcon icon={faCheck} size='xl'/>
                            </div>
                            <div className='benefits col-md-11'>
                                <div className='title'>
                                    <h2 className='title-small'>
                                        Minimize Returns
                                    </h2>
                                </div>
                                <div className='description'>
                                    <p>Our Virtual Try-On technology ensures customers choose the right fit and style the first time, 
                                        drastically reducing return rates and enhancing overall customer satisfaction</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='benefits-wrapper row'>
                            <div className='icon col-md-1'>
                                <FontAwesomeIcon icon={faCheck} size='xl'/>
                            </div>
                            <div className='benefits col-md-11'>
                                <div className='title'>
                                    <h2 className='title-small'>
                                        Captivate Your Customers
                                    </h2>
                                </div>
                                <div className='description'>
                                    <p>Style Shifter keeps customers engaged with interactive try-ons and tailored recommendations, 
                                        fostering a more engaging, satisfying shopping experience that boosts brand loyalty</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='text-container col-md-6'>
                        <div className='title'>
                            <h2 className='title'>
                                Elevate Your Retail
                            </h2>
                            <h2 className='title-right title'>
                                Success
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='get-started-section'>
                <div className='text-wrapper'>
                    <div className='title'>
                        <h2 className='title'>
                            Ready to Transform Your
                            <br></br>
                            Fashion Business?
                        </h2>
                    </div>
                    <p>See Style Shifter in Action - Request a Demo</p>
                    <div className='button-container'>
                        <button type="button" class="btn btn-dark">GET STARTED FOR FREE</button>
                    </div>
                </div>
            </section>

            <Footer/>

            {/* <NewsletterPopup/> */}
        </Fragment>
    );
}

export default Home;