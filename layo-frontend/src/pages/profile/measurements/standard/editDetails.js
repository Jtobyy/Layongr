import React from "react";
import mannequin1 from "../../../../images/mannequin1.svg";

export default class EditDetails extends React.Component {
    render() {
        return(
            <div className="BookAppointment">
                <h4 className="px-4 pt-1 ">Let's get down to measurements</h4>        
                <div className="d-flex">
                    <img src={mannequin1} height="400vh" />    
                    <div className="d-flex flex-column align-items-center mx-5">
                        <div className="dropdown my-2">
                            <button className="btn btn-light dropdown-toggle px-4 py-3" type="button" id="dropdownAddressButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="me-4">Height: </span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownAddressButton">
                                <a className="dropdown-item" href="#">Height 1</a>
                                <a className="dropdown-item" href="#">Height 2</a>
                                <a className="dropdown-item" href="#">Height 3</a>
                            </div>
                        </div>
                        <div class="dropdown my-2">
                            <button class="btn btn-light dropdown-toggle px-4 py-3" type="button" id="dropdownTimeButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="me-4">Bust:</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownTimeButton">
                                <a class="dropdown-item" href="#">Bust 1</a>
                                <a class="dropdown-item" href="#">Bust 2</a>
                                <a class="dropdown-item" href="#">Bust 3</a>
                            </div>
                        </div>
                        <div class="dropdown my-2">
                            <button class="btn btn-light dropdown-toggle px-4 py-3" type="button" id="dropdownTimeButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="me-4">Waist:</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownTimeButton">
                                <a class="dropdown-item" href="#">Waist 1</a>
                                <a class="dropdown-item" href="#">Waist 2</a>
                                <a class="dropdown-item" href="#">Waist 3</a>
                            </div>
                        </div>
                        <div class="dropdown my-2">
                            <button class="btn btn-light dropdown-toggle px-4 py-3" type="button" id="dropdownTimeButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="me-4">Hips:</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownTimeButton">
                                <a class="dropdown-item" href="#">Hips 1</a>
                                <a class="dropdown-item" href="#">Hips 2</a>
                                <a class="dropdown-item" href="#">Hips 3</a>
                            </div>
                        </div>
                        <div class="dropdown my-2">
                            <button class="btn btn-light dropdown-toggle px-4 py-3" type="button" id="dropdownTimeButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="me-4">Inseams:</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownTimeButton">
                                <a class="dropdown-item" href="#">Inseams 1</a>
                                <a class="dropdown-item" href="#">Inseams 2</a>
                                <a class="dropdown-item" href="#">Inseams 3</a>
                            </div>
                        </div>
                    </div>    
                </div>    
            </div>    
        )    
    }

}