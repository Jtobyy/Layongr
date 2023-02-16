import star from '../images/star.png';
import React from 'react';


export default class FilterBy extends React.Component {
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
                        <ul>
                            <li>500 per yard</li>
                            <li>1k per yard</li>
                            <li>10k - 20k</li>
                            <li>Above 20k</li>
                        </ul>
                    </div>
                    <div className='colors '>
                        <div className='position-relative filter-wrapper' onClick={(e) => this.showContent(e)}>
                            <h5 className='filter-title'>Colors</h5>
                            <div className='arrow position-absolute'>
                                <div className='stroke-1'></div>
                                <div className='stroke-2'></div>
                            </div>
                        </div>
                        <div className='container ps-4'>
                            <div className='row'>
                                <div className='col-2' style={{backgroundColor: 'white'}}></div>
                                <div className='col-2' style={{backgroundColor: '#AADC41'}}></div>
                                <div className='col-2' style={{backgroundColor: '#BC2DBF'}}></div>
                                <div className='col-2' style={{backgroundColor: '#D9D9D9'}}></div>
                                <div className='col-2' style={{backgroundColor: '#2E3C84'}}></div>
                            </div>
                            <div className='row'>
                                <div className='col-2' style={{backgroundColor: '#D47FE2'}}></div>
                                <div className='col-2' style={{backgroundColor: '#CFF088'}}></div>
                                <div className='col-2' style={{backgroundColor: '#49F8ED'}}></div>
                                <div className='col-2' style={{backgroundColor: '#EF3232'}}></div>
                                <div className='col-2' style={{backgroundColor: '#FFD700'}}></div>
                            </div>
                            <div className='row'>
                                <div className='col-2' style={{backgroundColor: '#5199ED'}}></div>
                                <div className='col-2' style={{backgroundColor: '#F24D4D'}}></div>
                                <div className='col-2' style={{backgroundColor: '#2C0404'}}></div>
                                <div className='col-2' style={{backgroundColor: '#F79E1B'}}></div>
                                <div className='col-2' style={{backgroundColor: '#863434'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}