import React from "react";
import $ from 'jquery';

export class NotFound extends React.Component {
    componentDidMount() {
        $('#spinner').addClass('hidden')
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center"
            style={{'minHeight': '100vh'}}>
                <h1 className="display-3" >404 page not found</h1>
                <p>sorry the page you are looking for doesn't exist.</p>
            </div>
        )
    }
}