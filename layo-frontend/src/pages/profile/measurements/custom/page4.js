import React, {useState} from "react";
import mannequin1 from "../../../../images/mannequin1.svg";
import Page3 from "./page3";
import Page5 from "./page5";

export default function Page4() {
        const [next, goNext] = useState(false)
        const [previous, goPrevious] = useState(false)

        if (next) return <Page5 />
        else if (previous) return <Page3 />
        
        return(
            <div className="CustomEdit">
                <div className="d-flex">
                    <img src={mannequin1} height="400vh" />    
                    <div className="d-flex w-100 flex-column align-items-start ms-2 me-5 ps-2 content">
                        <h4 className="mt-2">Lower Torso</h4>
                        <div className="d-flex ms-3 w-50">
                            <p>Round Seat/Hips</p>
                            <span className="ms-auto">23</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Round Thigh</p>
                            <span className="ms-auto">7</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Round Knee </p>
                            <span className="ms-auto">11</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Round Ankle</p>
                            <span className="ms-auto">10</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Outside Leg Length</p>
                            <span className="ms-auto">7.5</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Inside Leg Length</p>
                            <span className="ms-auto">8</span>
                        </div>
                        <div className="d-flex w-75 align-items-center">
                            <button className="btn btn-dark" onClick={() => (goPrevious(true))}>Back</button>
                            <p className="fw-bold ms-auto cursor" onClick={() => (goNext(true))}>Next</p>
                        </div>
                    </div>    
                    
                </div>    
            </div>    
        )    
}