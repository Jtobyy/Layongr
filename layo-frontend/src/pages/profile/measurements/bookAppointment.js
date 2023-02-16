import React from "react";
import rectangle54 from "../../../images/rectangle54.png"

export default class BookAppointment extends React.Component {
    render() {
        return(
            <div className="BookAppointment">
                <h4 className="px-4 pt-1 ">Measurements</h4>        
                <div className="d-flex">
                    <img src={rectangle54} />    
                    <div className="d-flex flex-column align-items-center mx-5">
                        <h5>Schedule an appointment for your Measurement</h5>
                        <div class="dropdown my-2">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownAddressButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Address
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownAddressButton">
                                <a class="dropdown-item" href="#">Address 1</a>
                                <a class="dropdown-item" href="#">Address 2</a>
                                <a class="dropdown-item" href="#">Address 3</a>
                            </div>
                        </div>
                        <div class="dropdown my-2">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownTimeButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Time
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownTimeButton">
                                <a class="dropdown-item" href="#">Time 1</a>
                                <a class="dropdown-item" href="#">Time 2</a>
                                <a class="dropdown-item" href="#">Time 3</a>
                            </div>
                        </div>
                        <button className="rounded px-3 py-1 my-2">Book Now</button>
                    </div>    
                </div>    
            </div>    
        )    
    }

}