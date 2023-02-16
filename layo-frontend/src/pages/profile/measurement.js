import React from "react";
import $ from 'jquery';
import { Navigate } from "react-router-dom";
import BookAppointment from "./measurements/bookAppointment";
import StandardMeasurement from "./measurements/standardMeasurement";
import Diy from "./measurements/diy";

export default class Measurement extends React.Component {

    constructor() {
        super()
        this.state = {
            options: ['bookAppointment', 'useStandard', 'diy',],
            selectedOption: -1,
        }
    }

    componentDidMount() {    
        $('.Measurement div div').on('click', this.selectOption)
    }

    selectOption = (e) => {
        e.currentTarget.firstChild.checked = true
        this.setState({selectedOption: parseInt(e.currentTarget.id)})
    }    

    render() {    
        if (this.state.options[this.state.selectedOption] == 'bookAppointment') return <BookAppointment />
        else if (this.state.options[this.state.selectedOption] == 'useStandard') return <StandardMeasurement />
        else if (this.state.options[this.state.selectedOption] == 'diy') return <Diy />

        return(
            <div className="Measurement">
                <h4 className="px-4 pt-1 ">Measurements</h4>
                <div className="d-flex flex-column ms-5">
                    <div className="position-relative d-flex flex-column bg-white align-items-center justify-content-center px-5 py-2 shadow-sm mb-2 rounded w-75 selected" id="0">
                        <input type="radio" name="selected-card" className="position-absolute end-0 selected ms-3 " checked/>
                        <h5 className="w-100 mb-0">Book an appointment</h5>
                        <p className="w-100 mb-0">Schedule at appointment to be measured</p>
                    </div>
                    <div className="position-relative d-flex flex-column bg-white align-items-center justify-content-center px-5 py-2 shadow-sm mb-2 rounded w-75" id="1">
                        <input type="radio" name="selected-card" className="position-absolute end-0 ms-3 "  />    
                        <h5 className="w-100 mb-0">Use Standard Body Measurements</h5>
                        <p className="w-100 mb-0">Input your size chart size</p>
                    </div>
                    <div className="position-relative d-flex flex-column bg-white align-items-center justify-content-center px-5 py-2 shadow-sm mb-2 rounded w-75" id="2">
                        <input type="radio" name="selected-card" className="position-absolute end-0 ms-3 "  />    
                        <h5 className="w-100 mb-0">Do it Yourself Measurements</h5>
                        <p className="w-100 mb-0">With a measuring tape, we can help you measure yourself</p>
                    </div>
                </div>    
            </div>    
        )    
    }
}