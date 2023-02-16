import React from "react";
import Binwhite from "../images/Binwhite.png";
import cottonMulticolor from "../images/cotton-multicolor.png";
import tailorInYellow from "../images/tailor-in-yellow.png";
import ScrollToTopOnMount from "../components/scrolltoview";
import { styleSheet } from "../styles";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="landing bg-white mt-5" style={{'minHeight': '100vh'}} >
                <ScrollToTopOnMount />    
                <div className="section-1 ribbon-multi-bg">
                    <Link to='/Fabrics' className="nav-link"><div>Fabrics</div></Link>
                </div>
                <div className="section-2">
                    <div className="d-flex flex-container justify-content-between">
                        <div className="flex-item">
                            <img loading="lazy" src={Binwhite} alt=""/>
                            <button>EXPLORE</button>
                        </div>    
                        <div className="flex-item">
                            <img loading="lazy" src={cottonMulticolor} alt=""/>
                            <button>SHOP</button>
                        </div>
                        <div className="flex-item">
                            <img loading="lazy" src={tailorInYellow} alt=""/>
                            <button>CONNECT</button>
                        </div>
                    </div>
                </div>
                <div loading="lazy" className="section-3 party-pic-bg">
                    <h1 className="text-center display-1" style={styleSheet.fw500}>Made For You</h1>
                </div>
            </div>    
        )
    }
}

export default Home