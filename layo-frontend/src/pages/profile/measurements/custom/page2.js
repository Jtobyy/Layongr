import React, {useState} from "react";
import mannequin1 from "../../../../images/mannequin1.svg";
import Page1 from "./page1";
import Page3 from "./page3";

export default function Page2() {
        const [next, goNext] = useState(false)
        const [previous, goPrevious] = useState(false)

        if (next) return <Page3 />
        else if (previous) return <Page1 />
        
        return(
            <div className="CustomEdit">
                <div className="d-flex">
                    <img src={mannequin1} height="400vh" />    
                    <div className="d-flex w-100 flex-column align-items-start ms-2 me-5 ps-2 content">
                        <h4 className="mt-2">Bust</h4>
                        <div className="d-flex ms-3 w-50">
                            <p>Bust Length:</p>
                            <span className="ms-auto">23</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>ust Point Separation:</p>
                            <span className="ms-auto">7</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Under-Bust Length:</p>
                            <span className="ms-auto">11</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>High Bust:</p>
                            <span className="ms-auto">10</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Round Bust:</p>
                            <span className="ms-auto">7.5</span>
                        </div>
                        <div className="d-flex ms-3 w-50">
                            <p>Round Under-Bust:</p>
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