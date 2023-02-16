import { Navigate } from "react-router-dom";

import Categories from "../components/categories";
import FilterBy from "../components/filterby";
import ScrollToTopOnMount from "../components/scrolltoview";
import { styleSheet } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/productsWishlistSlice";
import { selectCurrent } from "../features/productsSlice";
import NumberFormat from "react-number-format";

import love from '../images/love.png';
import redlove from '../images/redlove.png';
import blackStar from '../images/black-star.png';
import { useState } from "react";


export default function WomenCat() {
    const products = useSelector(state => state.products.products)
    const productsWishlist = useSelector(state => state.productsWishlist)

    const dispatch = useDispatch()
    const [selected, select] = useState('')
    
    const renderedProducts = products.map(product => (
        <div className="col-4 product-container position-relative position-relative" key={product.id}>
            <img className="product-image" src={product.image} alt='' 
            onClick={() => {
                dispatch(selectCurrent(product))
                select(product)}}
                />
            <div className="wishlist-add-btn position-absolute mt-3 me-2 top-0 end-0 rounded-circle">    
                {(() => {
                    let wishlistValues = Object.values(productsWishlist);
                    if (wishlistValues.includes(product.id)) return <img src={redlove} alt='' 
                    onClick={() => dispatch(removeItem(product.id))} />
                    else return <img src={love} alt='' 
                    onClick={() => dispatch(addItem(product.id))} />
                })()}
            </div>
            <div className="py-1">
                <div className="d-flex">
                    {product.title}
                    <span className="ms-auto">
                        4.32
                        <img className="blackStar ms-1" src={blackStar} alt='' />
                    </span>
                </div>
                <div className="d-flex small">
                    {product.company}
                </div>
                <div className="d-flex">
                    <NumberFormat value={product.price}
                        displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                    <span className="ms-auto small">{product.delivery_time}</span>
                </div>
            </div>
        </div>
    ))

    if (selected)
        return <Navigate to='/ProductDetail'/>
    return (
        <div className="women-cat mt-5 pt-2">
            <ScrollToTopOnMount />
            <div style={styleSheet.blackBorderBottom}>
                <Categories category="products" />
            </div>
            <div className="d-flex position-relative">
                <div className="mt-3 px-1 border border-dark filter-wrapper position-sticky " style={styleSheet.wFit}>
                    <FilterBy filter="products" />
                </div>
                <div className="container mt-3 ms-2 position-relative">
                    <div className="position-absolute top-0 sort-ind ps-1 pe-3">Sort By:    Pricing</div>
                    <div className="row">
                        {renderedProducts}    
                    </div>
                </div>
            </div>
        </div>
    )
}