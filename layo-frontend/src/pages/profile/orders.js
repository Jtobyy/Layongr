import sample from "../../images/womencat-testpic1.png";
import filterIcon from "../../images/filter-icon.svg";
import $ from 'jquery';
import { useEffect } from "react";

export default function Orders() {
    useEffect(
        () => {
            $('#filter-by').css('display', 'none')   
        }
    )
    return(
        <div className="Orders">
            <div className="d-flex">
                <h4>Orders</h4> 
                <img className="ms-auto" src={filterIcon} width="20px" onMouseLeave={() => {$('#filter-by').css('display', 'none')}} onMouseEnter={() => {$('#filter-by').css('display', 'block')}} />

                <div className="text-center position-absolute bg-white filter" id="filter-by" onMouseLeave={() => {$('#filter-by').css('display', 'none')}} onMouseEnter={() => {$('#filter-by').css('display', 'block')}}>
                    <div className="border border-dark py-2 px-1 cursor">Fabric + Tailormade</div>
                    <div className="border border-dark py-2 px-1 cursor">Tailormade</div>
                    <div className="border border-dark py-2 px-1 cursor">Fabric</div>
                    <div className="border border-dark py-2 px-1 cursor">Accessories</div>
                </div>
            </div>    
            
            <div className="d-flex flex-column border border-dark ">
                <div className="d-flex border border-dark rounded mb-1">
                    <img src={sample} width="8%"/>
                    <div className='d-flex flex-column py-1 px-3'>
                        <p className="fw-bold my-0 ">Adire Round Neck shirt</p>
                        <p className="my-0 small">Tailor - L’ayo Store </p>
                        <p className="my-0 small">Order Number: </p>
                        <span className="fw-bold">N5000</span>
                    </div>
                    <div className="ms-auto ">
                        <p className="small my-0 ">Order Status: Pending</p>
                        <span className="small d-flex align-items center ">Delivery Estimate: 
                            <div className='d-flex flex-column smaller ms-1'>
                                <span>September 12, 2022</span>
                                <span>September 14, 2022</span>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="d-flex border border-dark rounded mb-1">
                    <img src={sample} width="8%"/>
                    <div className='d-flex flex-column py-1 px-3'>
                        <p className="fw-bold my-0 ">Adire Round Neck shirt</p>
                        <p className="my-0 small">Tailor - L’ayo Store </p>
                        <p className="my-0 small">Order Number: </p>
                        <span className="fw-bold">N25000</span>
                    </div>
                    <div className="ms-auto ">
                        <p className="small my-0 ">Order Status: Pending</p>
                        <span className="small d-flex align-items center ">Delivery Estimate: 
                            <div className='d-flex flex-column smaller ms-1'>
                                <span>September 12, 2022</span>
                                <span>September 14, 2022</span>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="d-flex border border-dark rounded mb-1">
                    <img src={sample} width="8%"/>
                    <div className='d-flex flex-column py-1 px-3'>
                        <p className="fw-bold my-0 ">Adire Round Neck shirt</p>
                        <p className="my-0 small">Tailor - L’ayo Store </p>
                        <p className="my-0 small">Order Number: </p>
                        <span className="fw-bold">N35000</span>
                    </div>
                    <div className="ms-auto ">
                        <p className="small my-0 ">Order Status: Pending</p>
                        <span className="small d-flex align-items center ">Delivery Estimate: 
                            <div className='d-flex flex-column smaller ms-1'>
                                <span>September 12, 2022</span>
                                <span>September 14, 2022</span>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="d-flex border border-dark rounded mb-0">
                    <img src={sample} width="8%"/>
                    <div className='d-flex flex-column py-1 px-3'>
                        <p className="fw-bold my-0 ">Adire Round Neck shirt</p>
                        <p className="my-0 small">Tailor - L’ayo Store </p>
                        <p className="my-0 small">Order Number: </p>
                        <span className="fw-bold">N15000</span>
                    </div>
                    <div className="ms-auto ">
                        <p className="small my-0 ">Order Status: Pending</p>
                        <span className="small d-flex align-items center ">Delivery Estimate: 
                            <div className='d-flex flex-column smaller ms-1'>
                                <span>September 12, 2022</span>
                                <span>September 14, 2022</span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}