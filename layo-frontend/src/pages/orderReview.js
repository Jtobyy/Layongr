import React from "react";

import testpic2 from '../images/womencat-testpic2.png';
import testpic3 from '../images/womencat-testpic3.png';
import editPencil from '../images/edit-pencil.png';
import addBtn from '../images/add-btn.png';
import mastercardLogo from '../images/mastercardLogo.svg';
import visaLogo from '../images/visaLogo.svg';

import $ from 'jquery';



export default class ReviewOrder extends React.Component {

    componentDidMount() {
        $('.review-order .content').on('click', () => {
            $('.custom-overlay').css('display', 'none')
            $('body').css('overflow', 'auto')
        })
        $('.custom-overlay').css("display", "none")

        // Address
        $('.address-overlay .col-3 .btn').on('click', this.selectAddress)
        
        // Payment        
        $('.payment-overlay div div').on('click', this.selectPayment)
        
    }   

    selectAddress = (e) => {
        $('.address-overlay .btn').removeClass('selected')    
        e.target.classList.add('selected')
    }

    selectPayment = (e) => {
        e.currentTarget.firstChild.checked = true
        
    }    
    
    render() {
        return (
            <div  className="review-order mt-5 pt-3">
                <h3 className="ms-5 ps-4">Reveiw your order</h3>
                <div className="content d-flex flex-column ">
                    <div className="border rounded border-dark container p-4">
                        <div className="row">
                            <div className="col mb-3 pb-3 border-bottom position-relative ">
                                <h6 className="mb-1">Shipping Address</h6>
                                <p className="mb-0">Ibrahim Giwa</p>
                                <p className="mb-0">9th Biaduo Street, Off keffi street,</p>
                                <p className="mb-0">Southwest Ikoyi,</p>
                                <p className="mb-0">Lagos, Nigeria</p>
                                <p className="mb-0">Phone:</p>
    
                                <img src={editPencil} className="position-absolute end-0 top-0 edit-btn"
                                onClick={(e) => {
                                    $('.address-overlay').css('display', 'block')
                                    $('body').css('overflow', 'hidden')
                                    }}/>
                            </div>
                            <div className="col position-relative">
                                <h6>Payment</h6>
                                <p className="mb-0">Mastercard ***3559</p>
    
                                <img src={editPencil} className="position-absolute end-0 top-0 edit-btn"
                                onClick={(e) => {
                                    $('.payment-overlay').css('display', 'block')
                                    $('body').css('overflow', 'hidden')
                                    }}/>
                            </div>
                            <div className="col position-relative fw-bold">
                                <h6>Order Summary</h6>
                                <p className="mb-0">Tailor - N5,000</p>
                                <p className="mb-0">Tailor - N3,000</p>
                                <p className="mb-0">Tailor - N3,000</p>

                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col position-relative">
                                <h6>Measurement</h6>
                                <p className="mb-0">Ibrahim Giwa</p>
                                <p className="mb-0">Standard Size - 18</p>
    
                                <img src={editPencil} className="position-absolute end-0 top-0 edit-btn"/>
    
                            </div>
                            <div className="col">
                                <button className="rounded py-1 order-button  px-3">Make Your Order</button>
                            </div>
                            <div className="col">
                                <h6>Total- </h6>
                            </div>
                        </div>
                    </div>     
                </div>
    
                <div className="d-flex flex-column mt-3">
                    <div className="border rounded border-dark container p-4 pt-2">
                        <h6 className="delivery-est">Delivery Estimate : September 5, 2022 (If you order today)</h6>
                        <div className="row ">
                            <div className="col-8 d-flex mt-2">
                                <img src={testpic2} className="order-image"/>
                                <div className="ms-3">
                                    <h6 className="mb-0">Blue and White pattern Brown Adire Fabric.</h6>
                                    <p className="mb-2">L’ayo Store - 4.5</p>
    
                                    <p>2 Yards</p>
                                </div>
                            </div>
                            <div className="col fw-bold">
                                <h6>Fabric Summary</h6>
                                <p className="mb-0">Tailor - N5,000</p>
                                <p className="mb-0">Tailor - N3,000</p>
                                <p className="mb-0">Tailor - N3,000</p>
                            </div>
                        </div>
                    </div>     
                </div>
    
                <div className="d-flex flex-column mt-3">
                    <div className="border rounded border-dark container p-4 pt-2">
                        <h6 className="delivery-est">Delivery Estimate : September 5, 2022 (If you order today)</h6>
                        <div className="row ">
                            <div className="col-8 d-flex mt-2">
                                <img src={testpic3} className="order-image"/>
                                <div className="ms-3">
                                    <h6 className="mb-0">Blue and White pattern Brown Adire Fabric.</h6>
                                    <p className="mb-2">L’ayo Store - 4.5</p>
    
                                    <p>2 Yards</p>
                                </div>
                            </div>
                            <div className="col fw-bold">
                                <h6>Tailor Summary</h6>
                                <p className="mb-0">Tailor - N5,000</p>
                                <p className="mb-0">Tailor - N3,000</p>
                                <p className="mb-0">Tailor - N3,000</p>
                            </div>
                        </div>
                    </div>     
                </div>   
      

                {/* Overlays */}
                {/* Addreess */}
                <div className="position-absolute custom-overlay address-overlay top-0 bg-white mt-5 px-0 border">
                    <div className="container  px-0">
                        <h5 className="px-5 py-3">Choose Delivery Address</h5>
                        <div className="row justify-content-around">
                            <div className="col-3 d-flex justify-content-around border shadow mb-3 pt-3">
                                <img src={addBtn} className="add-btn "/>
                                <div>
                                    <p className="mb-0">Add new address</p>
                                    <p>Manage address</p>
                                </div>
                            </div>
                            <div className="col-3 border shadow pt-2 px-2 mb-3">
                                <b>Oluwapelumi Oritsegbebumi</b>
                                <p className="mb-0">9 Biaduo Street, </p>
                                <p className="mb-0">Off Keffi Street,</p>
                                <p className="mb-0">Southwest-Ikoyi,</p>
                                <p className="mb-0">Lagos, Nigeria</p>
                                <p className="mb-0">Phone: 08023532655</p>
                                <div className="d-flex btn-wrapper w-100 justify-content-center">
                                    <button className="btn selected" >Deliver Here</button>
                                </div>
                            </div>
                            <div className="col-3 border shadow  pt-2 px-2 mb-3">
                                <b>Oluwapelumi Oritsegbebumi</b>
                                <p className="mb-0">9 Biaduo Street, </p>
                                <p className="mb-0">Off Keffi Street,</p>
                                <p className="mb-0">Southwest-Ikoyi,</p>
                                <p className="mb-0">Lagos, Nigeria</p>
                                <p className="mb-0">Phone: 08023532655</p>
                                <div className="d-flex btn-wrapper w-100 justify-content-center">
                                    <button className="btn" >Deliver Here</button>
                                </div>
                            </div>
                            <div className="col-3 border shadow pt-2 px-2 mb-3">
                                <b>Oluwapelumi Oritsegbebumi</b>
                                <p className="mb-0">9 Biaduo Street, </p>
                                <p className="mb-0">Off Keffi Street,</p>
                                <p className="mb-0">Southwest-Ikoyi,</p>
                                <p className="mb-0">Lagos, Nigeria</p>
                                <p className="mb-0">Phone: 08023532655</p>
                                <div className="d-flex btn-wrapper w-100 justify-content-center">
                                    <button className="btn" >Deliver Here</button>
                                </div>
                            </div>
                            <div className="col-3 border shadow  pt-2 px-2 mb-3">
                                <b>Oluwapelumi Oritsegbebumi</b>
                                <p className="mb-0">9 Biaduo Street, </p>
                                <p className="mb-0">Off Keffi Street,</p>
                                <p className="mb-0">Southwest-Ikoyi,</p>
                                <p className="mb-0">Lagos, Nigeria</p>
                                <p className="mb-0">Phone: 08023532655</p>
                                <div className="d-flex btn-wrapper w-100 justify-content-center">
                                    <button className="btn" >Deliver Here</button>
                                </div>
                            </div>
                            <div className="col-3 border shadow  pt-2 px-2 mb-3">
                                <b>Oluwapelumi Oritsegbebumi</b>
                                <p className="mb-0">9 Biaduo Street, </p>
                                <p className="mb-0">Off Keffi Street,</p>
                                <p className="mb-0">Southwest-Ikoyi,</p>
                                <p className="mb-0">Lagos, Nigeria</p>
                                <p className="mb-0">Phone: 08023532655</p>
                                <div className="d-flex btn-wrapper w-100 justify-content-center">
                                    <button className="btn" >Deliver Here</button>
                                </div>
                            </div>
                            <div className="col-3 border shadow  pt-2 px-2 mb-3">
                                <b>Oluwapelumi Oritsegbebumi</b>
                                <p className="mb-0">9 Biaduo Street, </p>
                                <p className="mb-0">Off Keffi Street,</p>
                                <p className="mb-0">Southwest-Ikoyi,</p>
                                <p className="mb-0">Lagos, Nigeria</p>
                                <p className="mb-0">Phone: 08023532655</p>
                                <div className="d-flex btn-wrapper w-100 justify-content-center">
                                    <button className="btn" >Deliver Here</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment */}
                <div className="position-absolute custom-overlay payment-overlay top-0 bg-white">
                    <div className="d-flex flex-column">
                        <div className="position-relative d-flex flex-column bg-white align-items-center justify-content-center px-5 py-2 shadow mb-2 rounded selected">
                            <input type="radio" name="selected-card" className="position-absolute start-0 selected ms-3 "  />
                            <p className="w-100 mb-0">Mastercard xxxx-3559</p>
                            <p className="w-100 mb-0">Exp: 03/25</p>
                            <img className="position-absolute end-0 top-0 mt-2 me-4" width="30px" src={mastercardLogo}/>
                        </div>
                        <div className="position-relative d-flex flex-column bg-white align-items-center justify-content-center px-5 py-2 shadow mb-2 rounded">
                            <input type="radio" name="selected-card" className="position-absolute start-0 selected ms-3 "  />    
                            <p className="w-100 mb-0">Visa xxxx-4209</p>
                            <p className="w-100 mb-0">Exp: 03/25</p>
                            <img className="position-absolute end-0 top-0 mt-2 me-4" width="30px" src={visaLogo}/>
                        </div>
                        <div className="position-relative d-flex flex-column bg-white align-items-center justify-content-center px-5 py-2 shadow mb-2 rounded">
                            <input type="radio" name="selected-card" className="position-absolute start-0 selected ms-3 "  />    
                            <p className="w-100 mb-0">Visa xxxx-4119</p>
                            <p className="w-100 mb-0">Exp: 04/23</p>
                            <img className="position-absolute end-0 top-0 mt-2 me-4" width="30px" src={visaLogo}/>
                        </div>
                        <div className="position-relative d-flex flex-column bg-white align-items-center justify-content-center px-5 pb-4 pt-2 shadow mb-2 rounded">
                            <p className="w-100 mb-0">Add new card</p>
                        </div>
                    </div>    
                </div>

            </div>
           )
    }
}