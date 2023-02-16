import React from "react";
import $ from 'jquery';

export default class Account extends React.Component {
    // componentDidMount() {
    //     $('body').css('overflow', 'hidden')
    // }

    // componentWillUnmount() {
    //     $('body').css('overflow', 'auto')
    // }
    
    render() {
        return(
            <div className="Account">
                <h4 className="px-4 pt-1 ">Profile</h4>
                <div className="table-wrapper px-5">
                    <table className="table ">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Abubakar Giwa</td>
                                <td>Edit</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>Male</td>
                                <td>Edit</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>oladipogiwa@gmail.com</td>
                                <td>Edit</td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>*********</td>
                                <td>Edit</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>+234 8124420102</td>
                                <td>Edit</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
                
            </div>
        )
    }
}