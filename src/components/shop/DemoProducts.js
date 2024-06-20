import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

/**
 * Products
 * @param HandelQuickViewData
 * @param products
 * @param ordering
 * @returns {*}
 * @constructor
 */
function Products({HandelQuickViewData, products, ordering}) {

    return (
            <ul className={"products " + (ordering == 1 ? 'default-column' : ordering == 2 ? 'three-column' : ordering == 3 ? 'list-view' : '')}>
                {
                    products.map((item, index) => (
                        <li key={index} className="product">
                            <div className="product-holder">
                                <Link to="/single-slider-images">
                                    <img loading="lazy" src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                                </Link>
                            </div>
                            <div className="product-info">
                                <h4>
                                    <Link to="#">
                                        {item.title}
                                    </Link>
                                </h4>
                                <p className="product-description">{item.content}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
    );
}

export default Products;