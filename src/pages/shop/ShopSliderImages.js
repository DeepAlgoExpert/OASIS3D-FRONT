import React, {useState, Fragment} from 'react';
import Slider from "react-slick";

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import PageTitle from '../../components/global/PageTitle';
import Header from '../../components/header/Header';
import ProductInfoTabs from '../../components/products/ProductInfoTabs';
//import QuickView from '../../components/products/QuickView';
import RecentSingleProducts from '../../components/products/RecentSingleProducts';
import QuickView from '../../components/measurement/QuickView';

import './shop.css';

/**
 * demo data
 */
import data from '../../data/singleProductDemo.json';

/**
 * single shop page with  Slider Images
 * @param options
 * @returns {*}
 * @constructor
 */
function ShopSliderImages({options}) {

    /**
     * states
     */
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewData, setQuickViewData] = useState({});
    const [productCount, setProductCount] = useState(1);

    /**
     * Handle Product Count
     */
    const HandleProductCount = (e, data) => {
        e.preventDefault();
        if (data == 'plus') {
            setProductCount(productCount + 1);
        } else {
            if (productCount > 1) {
                setProductCount(productCount - 1);
            } else {
                setProductCount(1);
            }
        }
    };

    /**
     * Handel Quick View Data
     */
    const HandelQuickViewData = (e, item) => {
        e.preventDefault();
        setShowQuickView(!showQuickView);
        setQuickViewData(item);
    };

    /**
     * Handel Quick View Close
     */
    const HandelQuickViewClose = (e) => {
        e.preventDefault();
        setShowQuickView(false);
        setQuickViewData({});
    };

    /**
     * slider settings
     */
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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

            <Header options={options}/>

            <PageTitle name="Shop single"/>

            {/* start shop-single-section */}
            <section className="shop-single-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="shop-single-slider slider-thumbnail">
                                <Slider {...settings}>
                                    {
                                        data.images.map((item, index) => (
                                            <div key={index}>
                                                <img src={process.env.PUBLIC_URL + item.src}/>
                                            </div>
                                        ))
                                    }
                                </Slider>
                                <div className="slider-nav"></div>
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <div className="product-details">
                                <h2>{data.name}</h2>
                                <div className="price">
                                    <span className="current">{data.symbol}{data.price}</span>
                                    <span className="old">{data.symbol}{data.oldPrice}</span>
                                </div>
                                <div className="rating">
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star"/>
                                    <i className="fi flaticon-star-social-favorite-middle-full"/>
                                    <span>{data.reviewCount}</span>
                                </div>
                                <p>{data.shortDescription}</p>
                                <div className="product-option">
                                    <form className="form">
                                        <div className="product-row">
                                            <div className="touchspin-wrap">
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'plus')
                                                    }} id="slider-thumbnail-touchspin-up" className="btn btn-default "
                                                    type="button"><i className="glyphicon glyphicon-chevron-up"></i>
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        HandleProductCount(e, 'minus')
                                                    }}
                                                    id="slider-thumbnail-touchspin-down" className="btn btn-default "
                                                    type="button"><i className="glyphicon glyphicon-chevron-down"></i>
                                                </button>
                                                <input readOnly className="product-count" type="text"
                                                       value={productCount} name="product-count"/>
                                            </div>
                                            <div>
                                                <button type="submit">Add to cart</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="thb-product-meta-before">
                                    <div className="add-to-wishlist">
                                        <a href="#" className="add_to_wishlist">
                                            <i className="pe-7s-like"/>
                                            <span>Add To Wishlist</span>
                                        </a>
                                    </div>
                                    <div className="product_meta">
                                        <span className="sku_wrapper">SKU: <span
                                            className="sku">{data.sku}</span></span>
                                        <span className="posted_in">Categories:
                                            {
                                                data.categories.map((item, index) =>
                                                    <a key={index}
                                                       href={item.link}>
                                                        {item.name} {data.categories.length - 1 === index ? '' : ','}
                                                    </a>
                                                )
                                            }
                                        </span>
                                        <span className="tagged_as">Tags:
                                            {
                                                data.tags.map((item, index) =>
                                                    <a key={index}
                                                       href={item.link}>
                                                        {item.name} {data.tags.length - 1 === index ? '' : ','}
                                                    </a>
                                                )
                                            }
                                        </span>
                                    </div>
                                </div>
                                <button type="submit" onClick={e => setShowQuickView(true)}>Virtual Fitting Room</button>
                            </div>
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col col-md-8 col-md-offset-2">
                            <ProductInfoTabs/>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col col-xs-12">
                            <RecentSingleProducts onQuickViewClick={HandelQuickViewData}/>
                        </div>
                    </div>
                </div>
                {/* end of container */}
            </section>
            {/* end of shop-single-section */}
            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default ShopSliderImages;