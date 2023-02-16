import React, {useState} from "react";
import mannequin1 from "../../../../images/mannequin1.svg";
import Page2 from "./page2";
import Page4 from "./page4";

export default function Page3() {
        const [next, goNext] = useState(false)
        const [previous, goPrevious] = useState(false)

        if (next) return <Page4 />
        else if (previous) return <Page2 />
        
        return(
            <div className="CustomEdit">
                <div className="d-flex">
                    <img src={mannequin1} height="400vh" />    
                    <div className="d-flex w-100 flex-column align-items-start ms-2 me-5 ps-2 content">
                        <h4 className="mt-2">Waist</h4>
                        <div className="d-flex ms-3 w-50">
                            <p>Round Waist </p>
                            <span className="ms-auto">23</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Front Waist Length </p>
                            <span className="ms-auto">7</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Back Waist Length</p>
                            <span className="ms-auto">11</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Waist to Hips</p>
                            <span className="ms-auto">10</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Waist to Knee</p>
                            <span className="ms-auto">7.5</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Waist to Ankle</p>
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