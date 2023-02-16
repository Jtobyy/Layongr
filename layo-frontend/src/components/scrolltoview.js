import React from "react";

// Scroll pages to the top
export default class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return null;
    }    
}
