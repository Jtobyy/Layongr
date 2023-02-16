import { useState } from "react";
import React from "react";
import Page1 from "./custom/page1";
import editPencil from "../../../images/edit-pencil.png";

export default function Diy() {
        const [edit, setEdit] = useState(false)

        if (edit)
            return <Page1 />
        return(
            <div className="Account">
                <div className="px-4 pt-1 border mb-0 mt-3 d-flex">
                    <h4 >Customised Body Measurements </h4>
                    <p className="ms-auto">Edit <img className="position-relative edit-pencil" width="15px" onClick={() => {setEdit(true)}} src={editPencil}/></p>    
                </div>    
                <div className="border mb-2 px-4 pb-4">
                    <h5 className="ms-3">Bust</h5>    
                    <div className="table-wrapper px-5">
                        <table className="table ">
                            <tbody>
                                <tr>
                                    <td>Bust Length</td>
                                    <td>23</td>
                                    <td>High Bust</td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>Bust Point</td>
                                    <td>07</td>
                                    <td>Round Bust</td>
                                    <td>07</td>
                                </tr>
                                <tr>
                                    <td>Under bust</td>
                                    <td>10</td>
                                    <td>Round Under-Bust</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                </div>

                <div className="border mb-2 px-4 pb-4">
                    <h5 className="ms-3">Waist</h5>
                    <div className="table-wrapper px-5">
                        <table className="table ">
                            <tbody>
                                <tr>
                                    <td>Round Waist</td>
                                    <td>23</td>
                                    <td>Waist to Hips</td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>Front Waist</td>
                                    <td>07</td>
                                    <td>Waist to Knee</td>
                                    <td>07</td>
                                </tr>
                                <tr>
                                    <td>Back Waist</td>
                                    <td>10</td>
                                    <td>Waist to Ankle</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                </div>

                <div className="border mb-2 px-4 pb-4">
                    <h5 className="ms-3">Lower Torso</h5>
                    <div className="table-wrapper px-5">
                        <table className="table ">
                            <tbody>
                                <tr>
                                    <td>Round Seat/Hip</td>
                                    <td>23</td>
                                    <td>Round Seat/Hip</td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>Round Thigh</td>
                                    <td>07</td>
                                    <td>Outside Leg </td>
                                    <td>07</td>
                                </tr>
                                <tr>
                                    <td>Round Knee</td>
                                    <td>10</td>
                                    <td>Inside Leg</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                </div>
                
                <div className="border mb-2 px-4 pb-4">
                    <h5 className="ms-3">Sleeves</h5>                
                    <div className="table-wrapper px-5">
                        <table className="table ">
                            <tbody>
                                <tr>
                                    <td>Shoulder - Elbow</td>
                                    <td>23</td>
                                    <td>Round Arm</td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td>Shoulder - Wrist</td>
                                    <td>07</td>
                                    <td>Round Wrist</td>
                                    <td>07</td>
                                </tr>
                                <tr>
                                    <td>Round Bicep</td>
                                    <td>10</td>
                                    <td>Round Abdomen</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>     
                </div>           
            </div>
        )
}