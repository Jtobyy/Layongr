import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../features/fabricsWishlistSlice";
import NumberFormat from "react-number-format";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Categories from "../components/categories";
import FilterBy from "../components/filterby";
import ScrollToTopOnMount from "../components/scrolltoview";
import { fetchFabrics, selectCurrent } from "../features/fabricsSlice";
import { styleSheet } from "../styles";

import love from '../images/love.png';
import redlove from '../images/redlove.png';
// import blackStar from './images/black-star.png';


export default function Fabrics() {
    const fabrics = useSelector(state => state.fabrics.fabrics)    
    const fabricsWishlist = useSelector(state => state.fabricsWishlist)
    const fabricsStatus = useSelector(state => state.fabrics.status)
    const errorMessage = useSelector(state => state.fabrics.error)

    const dispatch = useDispatch()
    const [selected, select] = useState('') 

    useEffect(() => {
        if (fabricsStatus === 'idle') {
            dispatch(fetchFabrics())
        }
        else if (fabricsStatus === 'failed') {
            console.log('unable to fetch fabrics')
            console.log(errorMessage)
            // console.log(errorMessage)
            // if (errorMessage === 'Network Error') alert(errorMessage)
        }
        else if (fabricsStatus === 'success') console.log('got fabrics')
    }, [fabricsStatus, dispatch, fabrics, errorMessage])

    const renderedFabrics = fabrics.map(fabric => (
        <div className="col-3 fabric-container  position-relative" key={fabric.id}>
            <img className="fabric-image" src={fabric.image} alt='' 
            onClick={() => {
                dispatch(selectCurrent(fabric))
                select(fabric)}}
                />

            <div className="wishlist-add-btn position-absolute mt-2 me-3 top-0 end-0 rounded-circle"
            >    
                {(() => {
                    let wishlistValues = Object.values(fabricsWishlist);
                    if (wishlistValues.includes(fabric.id)) return <img src={redlove} alt='' 
                    onClick={() => dispatch(removeItem(fabric.id))} />
                    else return <img src={love} alt='' 
                    onClick={() => dispatch(addItem(fabric.id))} />
                })()}
            </div>
            <div className="py-1">
                <div className="d-flex">
                    {fabric.description}
                    <span className="ms-auto">
                        4.32
                        {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                    </span>
                </div>
                <div className="d-flex small">
                    {fabric.partner}
                </div>
                <div className="d-flex">
                    <NumberFormat value={fabric.sale_price}
                        displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                    <span className="ms-auto small">{fabric.delivery_time}</span>
                </div>
            </div>
        </div>
    ))    

    if (selected)
        return <Navigate to='/FabricDetail'/>
    return (
        <div className="fabrics mt-5 pt-2">
        <ScrollToTopOnMount />
        <div style={styleSheet.blackBorderBottom}>
            <Categories category="fabrics" />
        </div>
        <div className="d-flex position-relative">
            <div className="mt-3 px-1 border border-dark filter-wrapper position-sticky " style={styleSheet.wFit}>
                <FilterBy filter="fabrics" />
            </div>
            <div className="container mt-3 ms-2 position-relative">
                <div className="position-absolute top-0 sort-ind ps-1 pe-3">Sort By:    Pricing</div>
                <div className="row">
                    {renderedFabrics}    
                </div>
            </div>
        </div>
    </div>
    )
}