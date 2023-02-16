import React from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { Navigate } from "react-router-dom";

import blackStar from '../images/black-star.png';
import cancelBtn from '../images/cancel-btn.png';

import $ from "jquery";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // product: {},
            images: [],
            relatedProducts: [],
            moreProducts: [],
            toMeasurement: false,
        }
    }

    componentDidMount() {
        const currentSelect = this.props.currentSelect;

        // get more images related to the currentSelectProduct and set them to the state images property.
        // get at most 3 items related to current item
        // get at most 2 more items from this store

        this.setState({images: [currentSelect.image, currentSelect.image], 
            relatedProducts: [currentSelect.image, currentSelect.image, currentSelect.image],
            moreProducts: [currentSelect.image, currentSelect.title, currentSelect.image, currentSelect.title]
        })
    }
    
    renderedSamples = () => (
        this.state.images.map(image => {
            return (
                <img className="col-5 sampleImageLarge" src={image} alt='sample image' loading="lazy" />
            )
    }))

    render() {
        if (this.state.toMeasurement)
            return <Navigate to='/CheckoutMeasurement'/>
        return (
            <div className="mt-5 pt-4 container-fluid product-detail-page">
                {/* Checkout overlay */}
                <div className="checkout position-absolute start-50 top-0 mt-5" id="checkout-overlay">
                    <p className="fs-4 text-center checkout-header mb-0">Select Fabrics for your perfect clothe</p>
                    <img className="col-3 cancel-btn" src={cancelBtn} alt='sample image' loading="lazy" onClick={() => {
                        $('#checkout-overlay').css("display", "none")
                    }} />
                    <div className="d-flex justify-content-center fabrics">
                        <img className="col-3 sampleImageSmall" src={this.state.relatedProducts[0]} alt='sample image' loading="lazy" />
                        <img className="col-3 sampleImageSmall" src={this.state.relatedProducts[1]} alt='sample image' loading="lazy" />
                        <img className="col-3 sampleImageSmall" src={this.state.relatedProducts[2]} alt='sample image' loading="lazy" />
                    </div>
                    <div className="d-flex justify-content-around  options ">
                        <h3 className="bg-white flex-fill text-center py-3">More Fabrics</h3>
                        <h3 className="bg-black text-white flex-fill text-center py-3" onClick={() => {
                            this.setState({"toMeasurement": true})
                        }}>No, Checkout</h3>
                    </div>
                </div>
                {/* overlay end */}

                <div className="row justify-content-between">
                    <div className="col-7 row ps-0 justify-content-between">
                        {this.renderedSamples()}
                    </div>
                    <div className="col-5 detail-container">
                        <h2>{this.props.currentSelect.title}</h2>
                        <div className="w-50 d-flex align-items-center justify-content-between">
                            <div>{this.props.currentSelect.company}</div>
                            <div>
                                <span className="me-2">{this.props.currentSelect.rating}</span>
                                <img width='15px' className="mb-1" src={blackStar} alt=""/>
                            </div>
                        </div>
                        <div className="product-detail row mt-3 ">
                            <div className="col text-center ">
                                <button className="rounded px-5 py-1 order-button mb-4"  onClick={() => {
                            document.getElementById("checkout-overlay").style.display = "block"
                        }}>Order</button><br/>
                                <NumberFormat value={this.props.currentSelect.price}
                                displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                            </div>
                            <div className="col info position-relative">
                                <ul>
                                    <li>Not sewing</li>
                                    <li>No stains</li>
                                    <li>100% Original Silk Material</li>
                                    <li>Rope</li>
                                </ul>
                                <div className="position-absolute bottom-0">Delivery within {this.props.currentSelect.delivery_time}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7 row justify-content-between">
                        <img className="col-3 sampleImageSmall" src={this.state.relatedProducts[0]} alt='sample image' loading="lazy" />
                        <img className="col-3 sampleImageSmall" src={this.state.relatedProducts[1]} alt='sample image' loading="lazy" />
                        <img className="col-3 sampleImageSmall" src={this.state.relatedProducts[2]} alt='sample image' loading="lazy" />
                    </div>
                    <div className="col-5 more ms-4">
                        <p className="px-1 my-1">More from this store</p>
                        <div className="row">
                            <div className="col-6">
                                <img className="sampleImageMedium" src={this.state.moreProducts[0]} alt='more images' loading="lazy" />
                                {this.state.moreProducts[1]}
                            </div>
                            <div className="col-6">
                                <img className="sampleImageMedium" src={this.state.moreProducts[2]} alt='more images' loading="lazy" />
                                {this.state.moreProducts[1]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        currentSelect: state.products.currentSelect,
    };
};

// const ProductDetail_wrapper = () => (
//     <ProductDetail location={useLocation()} />
// );

export default connect(mapStateToProps)(ProductDetail)