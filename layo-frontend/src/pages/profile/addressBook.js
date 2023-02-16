import React from "react";
import $ from 'jquery';

export default class AddressBook extends React.Component {


    render() {
        return(
            <div className="Addresses d-flex flex-column" >
                <div >
                    <h4 className="px-4 pt-1 ">Primary Address</h4>
                    <div className="table-wrapper px-5 position-relative" >
                        <table className="table ">
                            <tbody>
                                <tr>
                                    <td>Street Number</td>
                                    <td>9</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Street Name</td>
                                    <td>Biaduo Street</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>South-West, Ikoyi</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>Lagos</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>+234 8124420102</td>
                                    <td>Edit</td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="radio" name="selected-address" checked className="position-absolute end-0 top-0 selected m-3 "  />  
                    </div>                
                </div>    

                <div>
                    <h4 className="px-4 pt-1 ">Address</h4>
                    <div className="table-wrapper px-5 position-relative">
                        <table className="table ">
                        <tbody>
                                <tr>
                                    <td>Street Number</td>
                                    <td>9</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Street Name</td>
                                    <td>Biaduo Street</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>South-West, Ikoyi</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>Lagos</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>+234 8124420102</td>
                                    <td>Edit</td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="radio" name="selected-address" className="position-absolute end-0 top-0 selected m-3 "  />  
                    </div>                
                </div>

                <div>
                    <h4 className="px-4 pt-1 ">Address</h4>
                    <div className="table-wrapper px-5 position-relative">
                        <table className="table ">
                        <tbody>
                                <tr>
                                    <td>Street Number</td>
                                    <td>9</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Street Name</td>
                                    <td>Biaduo Street</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>South-West, Ikoyi</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>Lagos</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>+234 8124420102</td>
                                    <td>Edit</td>
                                </tr>
                            </tbody>
                        </table>    
                        <input type="radio" name="selected-address" className="position-absolute end-0 top-0 selected m-3 "  />
                    </div>                
                </div>                                
                
            </div>
        )
    }
}