import React, { useState } from "react";
import { Navigate } from "react-router-dom";


export default function CheckoutMeasurement() {
    const [toReview, setToReview] = useState(false)

    if (toReview)
        return <Navigate to='/ReviewOrder'/>
    return (
        <div className="mt-5 pt-3 px-5 checkout-measurement">
            <div >
                <u className="fs-4 fw-light border-bottom ">Measurement Details</u>
                <p className="border-bottom border-dark pb-3">We at L’ayo want to sculpt the perfect work of art <b><i>just for you</i></b>.<br/>
                    We want to be extra extra sure about your measurements</p>
            </div>
            <div>
                <p className="mb-0">Almost there</p>
                <div className="d-flex justify-content-around  options ">
                    <div className="bg-white flex-fill me-5 text-center py-3">
                        <p className="mb-0 text-end me-5">Standard</p>
                        <div className="border content rounded d-flex flex-column text-start ps-4 pb-3 position-relative">
                            <p>Tobi Joseph</p>
                            <input type="radio" name="measurement-option" className="position-absolute end-0 me-4 mt-3"  />
                            <div className="w-50 d-flex justify-content-between ">
                                <b>Shirt Size:</b>
                                <span><b>18</b> UK Men</span>
                            </div>
                            <div className="w-50 d-flex justify-content-between ">
                                <b>Trouser Size:</b>
                                <span><b>18</b> UK Men</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex-fill ms-5 text-center py-3 position-relative">
                        <p className="mb-0 text-end me-5">Customise</p>
                        <input type="radio" name="measurement-option" className="position-absolute end-0 me-4 mt-3"  />
                        <div className="border content rounded d-flex flex-column text-start ps-4 pb-3">
                            <p>Tobi Joseph</p>
                            <div className="w-50 d-flex justify-content-between ">
                                <b>Shirt Size:</b>
                                <span><b>18</b> UK Men</span>
                            </div>
                            <div className="w-50 d-flex justify-content-between ">
                                <b>Trouser Size:</b>
                                <span><b>30</b> UK Men</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-4 ps-1 note">
                    Please note the standard sizes are only taken as a measure to confirm the custom size. Ensure you put in the right sizes at both.
                </div>
                <div className="my-4">
                    <div>
                        <input className="ms-5" type="radio" id="option1" name="selected-option" />
                        <label className="ms-2" for="option1">Confirm measurements</label> <br/>
                    </div>
                    <div className="mt-2">
                        <input className="ms-5" type="radio" id="option1" name="selected-option" />
                        <label className="ms-2" for="option1">Book tailor</label>
                    </div>
                </div>
                <div className="ms-4 ps-1 note note2">
                    If you have not updated your measurements in the last 3 months. You can not make an order
                </div>
                <button className="rounded px-5 py-1 order-button ms-4 my-4" onClick={() =>
                    setToReview(true)}>Continue</button>
                <div className="ms-4 ps-1 note note3">
                    Tip: All you have to do to confirm your measurement is to go to the measurement and look at your last measurement details.
                </div>
               
            </div>
        </div>
    )
}