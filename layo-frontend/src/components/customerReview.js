import star from '../images/star.png';
import React from 'react';

export default class CustomerReview extends React.Component {
    // The props values determines what filters should be returned
    constructor(props) {
        super(props)
    }

    render() {
            return (
                <div className='customer-review py-2 container ms-4'>
                    <div className='rating row ms-1'> 
                        <div className='col-4 ps-0 '>
                            <h2 className='py-2'>Customer Reviews</h2>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <span className='percent fs-5 ms-4'>50%</span>
                            </div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' className='invisible'/>
                                <span className='percent fs-5 ms-4'>22%</span>
                            </div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' className='invisible'/>
                                <img src={star} alt='' className='invisible'/>
                                <span className='percent fs-5 ms-4'>14%</span>
                            </div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' className='invisible'/>
                                <img src={star} alt='' className='invisible'/>
                                <img src={star} alt='' className='invisible'/>
                                <span className='percent fs-5 ms-4'>8%</span>
                            </div>
                            <div className='stars-wrapper'>
                                <img src={star} alt='' />
                                <img src={star} alt='' className='invisible'/>
                                <img src={star} alt='' className='invisible'/>
                                <img src={star} alt='' className='invisible'/>
                                <img src={star} alt='' className='invisible'/>
                                <span className='percent fs-5 ms-4'>6%</span>
                            </div>
                            <div className='average mt-2 fs-6'>Average rating 4.13</div>
                        </div>
                        <div className='col-8 review-list d-flex flex-column pb-4 pt-2'>
                            <div className='review-item d-flex flex-column px-3 pt-2 pb-1'>
                                <div className='d-flex align-items-center'>
                                    <span>Abayomi Daniel</span>
                                    <div className='stars-wrapper ms-5'>
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                    </div>
                                </div>
                                <div className='review-date small ms-2 '>Reviewed on the 36th August 2022</div>
                                <div className='review-message ms-4 mt-2 pt-2 pb-4 px-3 shadow'>I loved the material. It came as promised.</div>                                
                            </div>
                            <div className='review-item d-flex flex-column px-3 pt-2 pb-1'>
                                <div className='d-flex align-items-center'>
                                    <span>Abayomi Daniel</span>
                                    <div className='stars-wrapper ms-5'>
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                    </div>
                                </div>
                                <div className='review-date small ms-2 '>Reviewed on the 36th August 2022</div>
                                <div className='review-message ms-4 mt-2 pt-2 pb-4 px-3 shadow'>I loved the material. It came as promised.</div>                                
                            </div>
                            <div className='review-item d-flex flex-column px-3 pt-2 pb-1'>
                                <div className='d-flex align-items-center'>
                                    <span>Abayomi Daniel</span>
                                    <div className='stars-wrapper ms-5'>
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                    </div>
                                </div>
                                <div className='review-date small ms-2 '>Reviewed on the 36th August 2022</div>
                                <div className='review-message ms-4 mt-2 pt-2 pb-4 px-3 shadow'>I loved the material. It came as promised.</div>                                
                            </div>
                            <div className='review-item d-flex flex-column px-3 pt-2 pb-1'>
                                <div className='d-flex align-items-center'>
                                    <span>Abayomi Daniel</span>
                                    <div className='stars-wrapper ms-5'>
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                    </div>
                                </div>
                                <div className='review-date small ms-2 '>Reviewed on the 36th August 2022</div>
                                <div className='review-message ms-4 mt-2 pt-2 pb-4 px-3 shadow'>I loved the material. It came as promised.</div>                                
                            </div>
                            <div className='review-item d-flex flex-column px-3 pt-2 pb-1'>
                                <div className='d-flex align-items-center'>
                                    <span>Abayomi Daniel</span>
                                    <div className='stars-wrapper ms-5'>
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                        <img src={star} alt='' />
                                    </div>
                                </div>
                                <div className='review-date small ms-2 '>Reviewed on the 36th August 2022</div>
                                <div className='review-message ms-4 mt-2 pt-2 pb-4 px-3 shadow'>I loved the material. It came as promised.</div>                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
    }
}