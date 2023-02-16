import React from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

import CustomerReview from "../components/customerReview";

import blackStar from '../images/black-star.png';

class FabricDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // fabric: {},
            images: [],
            relatedFabrics: [],
            moreFabrics: [],
        }
    }

    componentDidMount() {
        const currentSelect = this.props.currentSelect;

        // get more images related to the currentSelectFabric and set them to the state images property.
        // get at most 3 items related to current item
        // get at most 2 more items from this store

        this.setState({images: [currentSelect.image, currentSelect.image], 
            relatedFabrics: [currentSelect.image, currentSelect.image, currentSelect.image],
            moreFabrics: [currentSelect.image, currentSelect.title, currentSelect.image, currentSelect.title]
        })
    }
    
    renderedSamples = () => (
        this.state.images.map(image => {
            return (
                <img className="col-5 sampleImageLarge" src={image} alt='sample image' loading="lazy" />
            )
    }))

    renderedMoreOfType = () => { this.state.moreOfType.map(fabric => (
        // TODO
        console.log("??")
    ))}

    showTailors = () => { this.state.tailors.map(tailor => (
        // TODO
        console.log("??")
    ))}

    render() {
        return (
            <div className="mt-5 pt-4 container-fluid fabric-detail-page">
                <div className="row justify-content-between " >
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
                        <div className="fabric-detail row mt-3 ">
                            <div className="col text-center ">
                                <button className="rounded px-5 py-1 order-button mb-4">Order</button><br/>
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
                        <img className="col-3 sampleImageSmall" src={this.state.relatedFabrics[0]} alt='sample image' loading="lazy" />
                        <img className="col-3 sampleImageSmall" src={this.state.relatedFabrics[1]} alt='sample image' loading="lazy" />
                        <img className="col-3 sampleImageSmall" src={this.state.relatedFabrics[2]} alt='sample image' loading="lazy" />
                    </div>
                    <div className="col-5 more ms-4">
                        <p className="px-1 my-1">More from this store</p>
                        <div className="row">
                            <div className="col-6">
                                <img className="sampleImageMedium" src={this.state.moreFabrics[0]} alt='more images' loading="lazy" />
                                {this.state.moreFabrics[1]}
                            </div>
                            <div className="col-6">
                                <img className="sampleImageMedium" src={this.state.moreFabrics[2]} alt='more images' loading="lazy" />
                                {this.state.moreFabrics[1]}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center pb-3 combo">
                    <p className="px-1 mt-4 fs-5">Combo Made for you</p>
                    <div className="col-6 ps-0">
                        <div className="d-flex align-items-center">
                            <img className="sampleImageMedium" src={this.state.moreFabrics[0]} alt='more images' loading="lazy" />
                            <div className="fw-bold px-3 fs-1">+</div>
                            <img className="sampleImageMedium" src={this.state.moreFabrics[2]} alt='more images' loading="lazy" />
                            <div className="col-1 fs-4 text-end">
                                or
                            </div>
                        </div>
                        <div className="fw-bold fs-4 d-flex rounded mt-3 justify-content-center text-white price-wrapper ">
                            <div className="price rounded px-2 ">N20,000</div>
                        </div>
                    </div>
                   
                    <div className="col-6 ps-0">
                        <div className="col-6 d-flex align-items-center">
                            <img className="sampleImageMedium" src={this.state.moreFabrics[0]} alt='more images' loading="lazy" />
                            <div className="fw-bold px-3 fs-1">+</div>
                            <img className="sampleImageMedium" src={this.state.moreFabrics[2]} alt='more images' loading="lazy" />
                        </div>
                        <div className="fw-bold fs-4 d-flex rounded mt-3 justify-content-center text-white price-wrapper ">
                            <div className="price rounded px-2 ">N20,000</div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between pb-3 more-of-type">
                    <p className="px-1 mt-4 fs-5">Tailors</p>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                     <div className="col-2 position-relative ps-0  me-3 mt-2  ">
                        <img className="fabric-image" src={this.state.moreFabrics[2]} alt='' />
                        <div className="py-1">
                            <div className="d-flex">
                                {this.state.moreFabrics[1]}
                                <span className="ms-auto">
                                    4.32
                                    {/* <img className="blackStar ms-1" src={blackStar} alt='' /> */}
                                </span>
                            </div>
                            <div className="d-flex small">
                                Tobi store's
                            </div>
                            <div className="d-flex">
                                <NumberFormat value="N7000"
                                    displayType={'text'} thousandSeparator={true} prefix={'₦ '} />
                                
                        </div>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <CustomerReview />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fabrics: state.fabrics.fabrics,
        currentSelect: state.fabrics.currentSelect,
    };
};

// const fabricDetail_wrapper = () => (
//     <FabricDetail location={useLocation()} />
// );

export default connect(mapStateToProps)(FabricDetail)