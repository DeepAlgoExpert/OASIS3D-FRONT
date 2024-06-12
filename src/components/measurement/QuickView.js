import { faArrowLeft, faArrowRight, faBagShopping, faChevronDown, faClose, faEllipsis, faLock, faShop, faTape } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Fragment, useState} from 'react';
import CustomTabs from '../tab';
//import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Swiper styles
import 'swiper/swiper.min.css';


/**
 * product Quick View component
 * @param data
 * @param onQuickViewCloseClick
 * @returns {*}
 * @constructor
 */
function QuickView({data, onQuickViewCloseClick}) {

    const [isTriedItOn, setTryItOn] = useState(false);

    return (
        <Fragment>
            <div className="quick-view-single-product activve-quick-view-single-product">
                <div className="view-single-product-inner clearfix quick-viewer-wrapper">
            {!isTriedItOn ? <>
                    <img loading="lazy" src={process.env.PUBLIC_URL + data.mainImg} alt=""/>
                    <button type='button'>
                        <FontAwesomeIcon icon={faEllipsis} color='#000' size='xl' />
                    </button>
                    <button type='button'>
                        <FontAwesomeIcon icon={faClose} color='#fff' size='xl' />
                    </button>
                    <div className='sideaction-buttons'>
                        <button type='button'>
                            <FontAwesomeIcon icon={faBagShopping} color='#fff' size='xl' />
                        </button>
                        <button type='button'>
                            <FontAwesomeIcon icon={faTape} color='#fff' size='xl' />
                        </button>
                        <button type='button'>
                            <FontAwesomeIcon icon={faArrowRight} color='#fff' size='xl' />
                        </button>
                        <button type='button'>
                            <FontAwesomeIcon icon={faArrowLeft} color='#fff' size='xl' />
                        </button>
                    </div>
                    <div className='action-buttons'>
                        <button type='button' className='button-long'>Match</button>
                        <div className='mix-wrapper'>
                        <div class="mix-background">
                            <i type="a" class="sc-iqVWFU fjbLxV"></i>
                            <i type="b" class="sc-iqVWFU fkzlHB"></i>
                            <i type="c" class="sc-iqVWFU epBTfO"></i></div>
                            <button type='button'>MIX</button>
                        </div>
                        <button type='button' className='button-long' onClick={() => setTryItOn(true)}>Try it on</button>
                    </div>
                    </>
                    : <TriedItOnView />}
                </div>
            </div> 
        </Fragment>
    );
}

const TriedItOnView = () => {
    const [curTab, setCurTab] = useState(0);
    return (
        <div className='try-it-on-view'>
            <div className='try-view-header'>
                <div></div>
                <h2 className='title'>How do you want to try it on?</h2>
                <button className='collapse-button'>
                    <FontAwesomeIcon icon={faChevronDown} color='#000' size='2x' />
                </button>
            </div>
            <CustomTabs
                tabTitles={["Try it on me", "Try it on model"]}
                active={curTab}
                onUpdate={(idx) => setCurTab(idx)}
            >
                {curTab === 0 ?
                    <div className='try-it-on-me'>
                        <div className='try-me-overlay'></div>
                        <div className='try-me-bg'>
                            <img data-testid="instructional-card-image-0" src="https://media.doris.services/avatar-gallery.jpg" class="sc-bvFjSx hDidbE" />
                        </div>
                        <h2 class="try-me-title">See how the clothes look on you</h2>
                        <p className='try-me-description'>Scan the QR Code below and take a photo to try clothes on you. When you finish you can check the results in this device as well.</p>
                        <div className='try-me-qrcode'>
                            <svg height="120" width="120" viewBox="0 0 53 53" data-testid="qrcode-svg" class="sc-hUplSX gBGHwl"><path fill="#FFFFFF" d="M0,0 h53v53H0z" shape-rendering="crispEdges"></path><path fill="#000000" d="M0 0h7v1H0zM9 0h5v1H9zM15 0h1v1H15zM18 0h3v1H18zM24 0h1v1H24zM28 0h4v1H28zM35 0h3v1H35zM39 0h4v1H39zM46,0 h7v1H46zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM13 1h2v1H13zM17 1h2v1H17zM20 1h5v1H20zM26 1h2v1H26zM29 1h1v1H29zM31 1h1v1H31zM34 1h3v1H34zM38 1h1v1H38zM40 1h1v1H40zM42 1h2v1H42zM46 1h1v1H46zM52,1 h1v1H52zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM12 2h2v1H12zM15 2h1v1H15zM18 2h3v1H18zM24 2h1v1H24zM29 2h1v1H29zM32 2h1v1H32zM35 2h1v1H35zM37 2h4v1H37zM43 2h1v1H43zM46 2h1v1H46zM48 2h3v1H48zM52,2 h1v1H52zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h2v1H10zM16 3h1v1H16zM18 3h4v1H18zM23 3h1v1H23zM25 3h3v1H25zM29 3h2v1H29zM34 3h3v1H34zM38 3h1v1H38zM42 3h1v1H42zM44 3h1v1H44zM46 3h1v1H46zM48 3h3v1H48zM52,3 h1v1H52zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM12 4h4v1H12zM17 4h1v1H17zM21 4h2v1H21zM24 4h9v1H24zM36 4h2v1H36zM41 4h2v1H41zM46 4h1v1H46zM48 4h3v1H48zM52,4 h1v1H52zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM13 5h3v1H13zM18 5h2v1H18zM22 5h1v1H22zM24 5h1v1H24zM28 5h1v1H28zM34 5h3v1H34zM38 5h1v1H38zM41 5h2v1H41zM46 5h1v1H46zM52,5 h1v1H52zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42 6h1v1H42zM44 6h1v1H44zM46,6 h7v1H46zM9 7h1v1H9zM14 7h1v1H14zM17 7h3v1H17zM21 7h2v1H21zM24 7h1v1H24zM28 7h1v1H28zM30 7h3v1H30zM37 7h1v1H37zM39 7h2v1H39zM42 7h1v1H42zM0 8h5v1H0zM6 8h3v1H6zM11 8h5v1H11zM18 8h2v1H18zM22 8h8v1H22zM31 8h1v1H31zM33 8h1v1H33zM35 8h3v1H35zM41 8h1v1H41zM44 8h2v1H44zM47 8h1v1H47zM49 8h1v1H49zM51 8h1v1H51zM1 9h1v1H1zM5 9h1v1H5zM7 9h1v1H7zM11 9h2v1H11zM16 9h3v1H16zM21 9h1v1H21zM24 9h2v1H24zM28 9h5v1H28zM37 9h1v1H37zM41 9h3v1H41zM49 9h1v1H49zM52,9 h1v1H52zM0 10h4v1H0zM5 10h2v1H5zM10 10h1v1H10zM12 10h1v1H12zM15 10h5v1H15zM22 10h1v1H22zM24 10h4v1H24zM31 10h1v1H31zM33 10h2v1H33zM36 10h3v1H36zM40 10h2v1H40zM43 10h1v1H43zM45 10h3v1H45zM0 11h6v1H0zM9 11h2v1H9zM16 11h2v1H16zM23 11h1v1H23zM27 11h1v1H27zM29 11h1v1H29zM31 11h3v1H31zM37 11h1v1H37zM39 11h2v1H39zM43 11h1v1H43zM45 11h3v1H45zM51 11h1v1H51zM0 12h1v1H0zM2 12h3v1H2zM6 12h2v1H6zM12 12h1v1H12zM15 12h2v1H15zM18 12h3v1H18zM26 12h3v1H26zM34 12h3v1H34zM41 12h2v1H41zM44 12h2v1H44zM48 12h4v1H48zM0 13h1v1H0zM2 13h2v1H2zM5 13h1v1H5zM9 13h2v1H9zM13 13h2v1H13zM17 13h1v1H17zM21 13h3v1H21zM25 13h1v1H25zM27 13h6v1H27zM37 13h1v1H37zM40 13h1v1H40zM42 13h2v1H42zM45 13h1v1H45zM47 13h2v1H47zM52,13 h1v1H52zM1 14h2v1H1zM5 14h2v1H5zM8 14h1v1H8zM12 14h1v1H12zM17 14h1v1H17zM19 14h3v1H19zM23 14h1v1H23zM26 14h1v1H26zM29 14h1v1H29zM33 14h4v1H33zM38 14h1v1H38zM41 14h1v1H41zM43 14h1v1H43zM46 14h2v1H46zM49 14h3v1H49zM0 15h2v1H0zM4 15h1v1H4zM7 15h1v1H7zM9 15h1v1H9zM12 15h2v1H12zM15 15h2v1H15zM24 15h1v1H24zM27 15h6v1H27zM34 15h2v1H34zM37 15h1v1H37zM39 15h4v1H39zM46 15h1v1H46zM1 16h1v1H1zM4 16h3v1H4zM9 16h4v1H9zM17 16h1v1H17zM21 16h1v1H21zM24 16h4v1H24zM29 16h3v1H29zM34 16h6v1H34zM42 16h3v1H42zM46 16h1v1H46zM48 16h3v1H48zM52,16 h1v1H52zM0 17h4v1H0zM9 17h1v1H9zM13 17h1v1H13zM15 17h1v1H15zM18 17h3v1H18zM24 17h3v1H24zM28 17h3v1H28zM33 17h1v1H33zM36 17h1v1H36zM41 17h3v1H41zM47 17h1v1H47zM49 17h1v1H49zM52,17 h1v1H52zM0 18h1v1H0zM2 18h1v1H2zM5 18h2v1H5zM13 18h1v1H13zM18 18h1v1H18zM20 18h2v1H20zM23 18h3v1H23zM27 18h1v1H27zM29 18h1v1H29zM31 18h1v1H31zM34 18h1v1H34zM36 18h1v1H36zM38 18h2v1H38zM41 18h1v1H41zM45 18h2v1H45zM48 18h1v1H48zM1 19h1v1H1zM3 19h2v1H3zM8 19h1v1H8zM10 19h1v1H10zM14 19h2v1H14zM18 19h3v1H18zM24 19h1v1H24zM27 19h1v1H27zM29 19h6v1H29zM37 19h1v1H37zM39 19h2v1H39zM43 19h1v1H43zM51 19h1v1H51zM1 20h2v1H1zM6 20h1v1H6zM10 20h1v1H10zM15 20h2v1H15zM18 20h1v1H18zM20 20h1v1H20zM23 20h6v1H23zM34 20h1v1H34zM36 20h2v1H36zM42 20h4v1H42zM48 20h3v1H48zM5 21h1v1H5zM8 21h1v1H8zM10 21h1v1H10zM13 21h2v1H13zM17 21h1v1H17zM19 21h1v1H19zM21 21h2v1H21zM24 21h2v1H24zM27 21h2v1H27zM30 21h1v1H30zM32 21h1v1H32zM35 21h3v1H35zM40 21h3v1H40zM47 21h1v1H47zM50,21 h3v1H50zM0 22h2v1H0zM4 22h1v1H4zM6 22h2v1H6zM10 22h2v1H10zM13 22h2v1H13zM18 22h3v1H18zM22 22h2v1H22zM25 22h2v1H25zM29 22h1v1H29zM34 22h5v1H34zM45 22h2v1H45zM48 22h1v1H48zM50 22h2v1H50zM1 23h1v1H1zM5 23h1v1H5zM7 23h1v1H7zM12 23h1v1H12zM14 23h1v1H14zM17 23h2v1H17zM21 23h2v1H21zM24 23h1v1H24zM28 23h1v1H28zM30 23h1v1H30zM32 23h1v1H32zM34 23h2v1H34zM37 23h4v1H37zM42 23h1v1H42zM46 23h2v1H46zM0 24h1v1H0zM3 24h6v1H3zM10 24h2v1H10zM13 24h3v1H13zM18 24h2v1H18zM22 24h1v1H22zM24 24h5v1H24zM31 24h1v1H31zM34 24h4v1H34zM41 24h1v1H41zM44 24h5v1H44zM50 24h1v1H50zM0 25h5v1H0zM8 25h1v1H8zM16 25h3v1H16zM21 25h1v1H21zM24 25h1v1H24zM28 25h1v1H28zM30 25h1v1H30zM32 25h1v1H32zM35 25h3v1H35zM40 25h1v1H40zM42 25h3v1H42zM48 25h2v1H48zM52,25 h1v1H52zM4 26h1v1H4zM6 26h1v1H6zM8 26h2v1H8zM11 26h2v1H11zM15 26h2v1H15zM18 26h2v1H18zM23 26h2v1H23zM26 26h1v1H26zM28 26h2v1H28zM31 26h1v1H31zM33 26h3v1H33zM37 26h3v1H37zM43 26h2v1H43zM46 26h1v1H46zM48 26h2v1H48zM4 27h1v1H4zM8 27h1v1H8zM10 27h2v1H10zM13 27h2v1H13zM16 27h2v1H16zM21 27h1v1H21zM24 27h1v1H24zM28 27h1v1H28zM30 27h3v1H30zM36 27h1v1H36zM40 27h1v1H40zM42 27h1v1H42zM44 27h1v1H44zM48 27h1v1H48zM51 27h1v1H51zM4 28h6v1H4zM11 28h2v1H11zM16 28h1v1H16zM18 28h1v1H18zM20 28h2v1H20zM24 28h6v1H24zM35 28h2v1H35zM38 28h1v1H38zM43 28h8v1H43zM0 29h3v1H0zM10 29h2v1H10zM13 29h2v1H13zM17 29h1v1H17zM19 29h1v1H19zM22 29h1v1H22zM25 29h3v1H25zM30 29h1v1H30zM32 29h1v1H32zM36 29h1v1H36zM39 29h1v1H39zM41,29 h12v1H41zM0 30h1v1H0zM2 30h2v1H2zM5 30h3v1H5zM9 30h1v1H9zM17 30h1v1H17zM19 30h3v1H19zM23 30h2v1H23zM26 30h1v1H26zM28 30h2v1H28zM34 30h2v1H34zM37 30h2v1H37zM43 30h2v1H43zM47 30h4v1H47zM0 31h1v1H0zM2 31h2v1H2zM8 31h2v1H8zM13 31h1v1H13zM23 31h1v1H23zM27 31h1v1H27zM29 31h1v1H29zM32 31h1v1H32zM40 31h2v1H40zM43 31h1v1H43zM45 31h2v1H45zM52,31 h1v1H52zM0 32h1v1H0zM3 32h2v1H3zM6 32h2v1H6zM10 32h2v1H10zM17 32h1v1H17zM21 32h1v1H21zM23 32h1v1H23zM28 32h3v1H28zM33 32h1v1H33zM36 32h1v1H36zM38 32h1v1H38zM41 32h1v1H41zM50 32h2v1H50zM2 33h1v1H2zM4 33h1v1H4zM9 33h3v1H9zM13 33h1v1H13zM15 33h1v1H15zM18 33h3v1H18zM23 33h5v1H23zM29 33h3v1H29zM35 33h3v1H35zM40 33h3v1H40zM44 33h6v1H44zM52,33 h1v1H52zM3 34h4v1H3zM8 34h1v1H8zM10 34h2v1H10zM14 34h1v1H14zM18 34h1v1H18zM20 34h2v1H20zM28 34h1v1H28zM34 34h1v1H34zM38 34h2v1H38zM45 34h1v1H45zM0 35h1v1H0zM2 35h1v1H2zM5 35h1v1H5zM9 35h3v1H9zM15 35h1v1H15zM17 35h1v1H17zM19 35h4v1H19zM26 35h2v1H26zM29 35h5v1H29zM36 35h9v1H36zM46 35h3v1H46zM51 35h1v1H51zM2 36h1v1H2zM4 36h3v1H4zM8 36h1v1H8zM13 36h1v1H13zM16 36h1v1H16zM18 36h4v1H18zM23 36h2v1H23zM27 36h2v1H27zM34 36h4v1H34zM41 36h2v1H41zM50,36 h3v1H50zM0 37h2v1H0zM3 37h1v1H3zM7 37h6v1H7zM14 37h1v1H14zM17 37h1v1H17zM22 37h1v1H22zM24 37h4v1H24zM30 37h1v1H30zM33 37h1v1H33zM35 37h3v1H35zM39 37h5v1H39zM47,37 h6v1H47zM0 38h3v1H0zM4 38h1v1H4zM6 38h4v1H6zM11 38h4v1H11zM16 38h1v1H16zM18 38h1v1H18zM20 38h1v1H20zM22 38h1v1H22zM24 38h2v1H24zM27 38h1v1H27zM29 38h1v1H29zM31 38h1v1H31zM34 38h1v1H34zM36 38h1v1H36zM44 38h2v1H44zM49 38h2v1H49zM2 39h4v1H2zM7 39h5v1H7zM14 39h1v1H14zM17 39h2v1H17zM21 39h2v1H21zM24 39h1v1H24zM30 39h3v1H30zM37 39h2v1H37zM40 39h1v1H40zM42 39h2v1H42zM45 39h2v1H45zM48 39h2v1H48zM51 39h1v1H51zM6 40h1v1H6zM8 40h8v1H8zM18 40h2v1H18zM22 40h3v1H22zM27 40h3v1H27zM34 40h5v1H34zM41 40h1v1H41zM44 40h3v1H44zM50 40h1v1H50zM5 41h1v1H5zM7 41h1v1H7zM12 41h1v1H12zM16 41h3v1H16zM21 41h1v1H21zM23 41h5v1H23zM30 41h2v1H30zM36 41h2v1H36zM41 41h3v1H41zM47,41 h6v1H47zM0 42h2v1H0zM3 42h4v1H3zM8 42h1v1H8zM10 42h2v1H10zM14 42h6v1H14zM27 42h3v1H27zM31 42h5v1H31zM37 42h2v1H37zM40 42h1v1H40zM44 42h2v1H44zM49 42h1v1H49zM1 43h2v1H1zM7 43h1v1H7zM9 43h3v1H9zM16 43h1v1H16zM18 43h1v1H18zM25 43h1v1H25zM29 43h4v1H29zM34 43h1v1H34zM36 43h2v1H36zM39 43h2v1H39zM42 43h7v1H42zM52,43 h1v1H52zM3 44h1v1H3zM6 44h1v1H6zM8 44h2v1H8zM13 44h2v1H13zM16 44h1v1H16zM18 44h1v1H18zM20 44h2v1H20zM24 44h6v1H24zM35 44h2v1H35zM38 44h2v1H38zM41 44h1v1H41zM44 44h8v1H44zM8 45h1v1H8zM11 45h2v1H11zM14 45h1v1H14zM19 45h1v1H19zM21 45h4v1H21zM28 45h1v1H28zM30 45h1v1H30zM32 45h1v1H32zM35 45h3v1H35zM40 45h1v1H40zM42 45h1v1H42zM44 45h1v1H44zM48 45h2v1H48zM52,45 h1v1H52zM0 46h7v1H0zM8 46h4v1H8zM15 46h1v1H15zM17 46h1v1H17zM19 46h1v1H19zM21 46h1v1H21zM23 46h2v1H23zM26 46h1v1H26zM28 46h1v1H28zM33 46h3v1H33zM39 46h1v1H39zM41 46h1v1H41zM44 46h1v1H44zM46 46h1v1H46zM48 46h1v1H48zM51 46h1v1H51zM0 47h1v1H0zM6 47h1v1H6zM11 47h1v1H11zM13 47h2v1H13zM24 47h1v1H24zM28 47h1v1H28zM30 47h3v1H30zM34 47h1v1H34zM39 47h2v1H39zM42 47h1v1H42zM44 47h1v1H44zM48 47h2v1H48zM51 47h1v1H51zM0 48h1v1H0zM2 48h3v1H2zM6 48h1v1H6zM8 48h2v1H8zM12 48h1v1H12zM14 48h1v1H14zM17 48h1v1H17zM21 48h1v1H21zM24 48h5v1H24zM34 48h6v1H34zM41 48h2v1H41zM44 48h5v1H44zM50 48h1v1H50zM0 49h1v1H0zM2 49h3v1H2zM6 49h1v1H6zM8 49h4v1H8zM14 49h2v1H14zM18 49h3v1H18zM23 49h2v1H23zM30 49h2v1H30zM35 49h3v1H35zM39 49h1v1H39zM41 49h4v1H41zM46 49h2v1H46zM49 49h1v1H49zM51 49h1v1H51zM0 50h1v1H0zM2 50h3v1H2zM6 50h1v1H6zM8 50h2v1H8zM12 50h2v1H12zM17 50h2v1H17zM20 50h1v1H20zM22 50h6v1H22zM29 50h1v1H29zM33 50h4v1H33zM38 50h1v1H38zM40 50h1v1H40zM46 50h3v1H46zM52,50 h1v1H52zM0 51h1v1H0zM6 51h1v1H6zM8 51h3v1H8zM14 51h2v1H14zM19 51h2v1H19zM23 51h1v1H23zM28 51h7v1H28zM36 51h2v1H36zM40 51h4v1H40zM47 51h1v1H47zM51 51h1v1H51zM0 52h7v1H0zM8 52h1v1H8zM10 52h1v1H10zM12 52h1v1H12zM15 52h7v1H15zM24 52h4v1H24zM29 52h2v1H29zM35 52h3v1H35zM39 52h1v1H39zM43 52h2v1H43zM46 52h2v1H46zM49 52h2v1H49z" shape-rendering="crispEdges"></path></svg>
                        </div>
                        <div class="try-me-other">
                            <FontAwesomeIcon icon={faLock} color='#fff' />
                            <span>Only you can view your photo.</span>
                        </div>
                    </div>
                 : 
                 <div>
                      <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                      </Swiper>
                    </div>
                }
            </CustomTabs>
        </div>
    )
}


export default QuickView;