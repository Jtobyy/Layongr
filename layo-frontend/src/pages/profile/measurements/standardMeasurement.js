import React, { useState } from "react";
import editPencil from "../../../images/edit-pencil.png";
import EditDetails from "./standard/editDetails";


export default function StandardMeasurement() {
        const [edit, setEdit] = useState(false)

        if (edit)
            return <EditDetails />
        return(
            <div className="StandardMeasurement">
                <h4 className="px-4 pt-1 ">Standard Body Measurements</h4>
                <div className="table-wrapper px-5">
                    <table className="table ">
                        <tbody>
                            <tr>
                                <td>Height</td>
                                <td>07</td>
                                <td>Edit <img className="position-relative edit-pencil" width="15px" onClick={() => {setEdit(true)}} src={editPencil}/></td>
                            </tr>
                            <tr>
                                <td>Bust</td>
                                <td>07</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Waist</td>
                                <td>23</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Hips</td>
                                <td>10</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><b>Size 10</b></td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
                
            </div>
        )
}