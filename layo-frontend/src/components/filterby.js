import star from '../images/star.png';
import React from 'react';

import { connect } from "react-redux";
import { fetchFabrics, fetchColors } from "../features/fabricsSlice";

import $ from 'jquery';


const RenderColors = (props) => {
    const colors = props.colors.map((color) => (
           <div className='col-2 color' data-color={color.name} style={{backgroundColor: color.name}}></div>
    ))
    return (
        <div className='row'> {colors} </div>
    )
}

class FilterBy extends React.Component {
    // The props values determines what filters should be returned
    constructor(props) {
        super(props)
    }

    showContent = (e) => {
        // Shows display or hide of a filter group depending on which one was selected
        console.log(e)
        let arrow;
        let content;
        switch(e.target.classList[0]) {
            case 'filter-wrapper':
                content = e.target.nextElementSibling;
                arrow = e.target.lastElementChild;
                break;
            case 'filter-title':
                content = e.target.parentElement.nextElementSibling;
                arrow = e.target.nextElementSibling;
                break;
            case 'arrow':
                content = e.target.parentElement.nextElementSibling;
                arrow = e.target;
                break;
            case 'stroke-1':
            case 'stroke-2':    
                content = e.target.parentElement.parentElement.nextElementSibling;
                arrow = e.target.parentElement
                break;
            default:
                console.log('reached default');
                break;
        }

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden')
            arrow.classList.remove('rotate')
        }
        else {
            content.classList.add('hidden')
            arrow.classList.add('rotate')
        }        
    }

    componentDidMount() {
        if (this.props.filter === "fabrics") {
            $('.pricing .pricing-list li').on('click', (el) => {
                const price = el.target.dataset.price
                this.props.fetchFabrics({cat: 'F', price: price})
            })
    
            $('.colors .color').on('click', (el) => {
                const color = el.target.dataset.color
                this.props.fetchFabrics({cat: 'F', colors: color})
            })

            let colorStatus = this.props.colorStatus
            if (colorStatus === 'idle') {
                // console.log('color fetch idle')
                this.props.fetchColors()
            }
            else if (colorStatus === 'failed') {
                // console.log('unable to fetch colors')
                // console.log(this.props.colorError)
            }
            else if (colorStatus === 'succeeded') {
                // console.log('got colors')
                // console.log(this.props.colors)
            } 
        }    
    }

    componentDidUpdate() {    
        $('.colors .color').on('click', (el) => {
            const color = el.target.dataset.color
            this.props.fetchFabrics({cat: 'F', colors: color})
        })   
    }

    render() {
        if (this.props.filter === "products")    
            return (
                <div className='filter-by py-2 '>
                    <div className='rating'>    
                        <div className='position-relative filter-wrapper' onClick={(e) => this.showContent(e)}>
                            <h5 className='filter-title'>Rating</h5>    
                            <div className='arrow position-absolute'>
                                <div className='stroke-1'></div>
                                <div className='stroke-2'></div>
                            </div>
                        </div>    
                        <div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                            </div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                            </div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                            </div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                            </div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                            </div>
                        </div>
                    </div>
                    <h5>New</h5>
                    <div className='pricing'>
                        <div className='position-relative filter-wrapper' onClick={(e) => this.showContent(e)}>
                            <h5 className='filter-title'>Pricing   ₦</h5>
                            <div className='arrow position-absolute'>
                                <div className='stroke-1'></div>
                                <div className='stroke-2'></div>
                            </div>
                        </div>
                        <ul>
                            <li>Below 5k</li>
                            <li>5k - 10k</li>
                            <li>10k - 20k</li>
                            <li>Above 20k</li>
                        </ul>
                    </div>
                    <div className='delivery'>
                        <div className='position-relative filter-wrapper' onClick={(e) => this.showContent(e)}>
                            <h5 className='filter-title'>Delivery Time</h5>
                            <div className='arrow position-absolute'>
                                <div className='stroke-1'></div>
                                <div className='stroke-2'></div>
                            </div>
                        </div>
                        <ul>
                            <li>48 Hours</li>
                            <li>2 - 5 Days</li>
                            <li>5 - 7 Days</li>
                            <li>7 - 9 Days</li>
                        </ul>
                    </div>
                </div>
            )

        else if (this.props.filter === "fabrics")
            return (
                <div className='filter-by py-2 '>
                    <div className='pricing'>
                        <div className='position-relative filter-wrapper' onClick={(e) => this.showContent(e)}>
                            <h5 className='filter-title'>Pricing   ₦</h5>
                            <div className='arrow position-absolute'>
                                <div className='stroke-1'></div>
                                <div className='stroke-2'></div>
                            </div>
                        </div>
                        <ul className='pricing-list'>
                            <li data-price="500">500 per yard</li>
                            <li data-price="1000">1k per yard</li>
                            <li data-price="10000,20000">10k - 20k</li>
                            <li data-price="gt,20000">Above 20k</li>
                        </ul>
                    </div>
                    <div className='colors w-75'>
                        <div className='position-relative filter-wrapper' onClick={(e) => this.showContent(e)}>
                            <h5 className='filter-title'>Colors</h5>
                            <div className='arrow position-absolute'>
                                <div className='stroke-1'></div>
                                <div className='stroke-2'></div>
                            </div>
                        </div>
                        <div className='container ps-4 '>
                            <RenderColors colors={this.props.colors} />
                        </div>
                    </div>
                </div>
            )
    }
}


const mapStateToProps = state => {
    return {
        colors: state.fabrics.colors,
        colorStatus: state.fabrics.colorStatus,
        colorErrorMessage: state.fabrics.colorError,
    };
};

const mapDispatchToProps = () => ({ 
    fetchColors,
    fetchFabrics,
});

export default connect(mapStateToProps, mapDispatchToProps())(FilterBy)