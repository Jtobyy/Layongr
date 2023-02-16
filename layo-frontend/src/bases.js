import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';

import bag from './images/bag.png';
import sample from './images/womencat-testpic1.png';
import logo from './images/transparentlogo.png';
import google from './images/google.png';
import nigeria from './images/nigeria.png';
import p from './images/pininterest.png';
import fb from './images/Facebook.png';
import ig from './images/Instagram.png';
import tw from './images/Twitter.png';
import w from './images/WhatsApp.png';

import { toggle as toggleSignin, signInUser, selectSigninState, selectSignedinState } from './features/signinSlice';
import { toggle as toggleSignup, selectSignupState } from './features/signupSlice';

import {styleSheet} from './styles/index.js'
// import { toggle as toggleSignup, selectSignupState } from './features/signupSlice';

import { useSelector, useDispatch } from 'react-redux';

function Header() {
    const signinState = useSelector(selectSigninState)
    const signupState = useSelector(selectSignupState)
    
    const signedinState = useSelector(selectSignedinState)

    const [bag, showBag] = useState(false)

    const dispatch = useDispatch()

    return(
        <header className="header fixed-top bg-white">
            <nav className="navbar navbar-expand-lg px-5 py-0">
                <a href="/" className="navbar-brand py-0">
                    <span>L’ay<span style={{'fontSize': '1.4rem'}}>ọ̀</span></span>
                    <img src={logo} alt='logo' className="header-logo " />    
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex align-items-center justify-content-between w-100 ">    
                    <ul className="navbar-nav w-25 d-flex justify-content-around">
                        <li className="nav-item active">
                            <Link to='/Women'  className="nav-link">Women</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to='/Men'  className="nav-link">Men</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Kids'  className="nav-link">Kids</Link>
                        </li>
                    </ul>
                    
                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group search">
                            <input placeholder="Search" className="form-control query"
                            aria-label="Search" aria-describedby="search-text" id="query" type='search' />
                            <div className="input-group-append">
                                <a id="search-link">
                                    <span className="input-group-text search-icon">
                                        <i className="bi bi-search"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </form>

                    <ul className="navbar-nav w-25 d-flex justify-content-around">
                        <li className="nav-item">
                            <Link to='/Fabrics' className="nav-link">Fabrics</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accessories</a>
                        </li>
                        <li className="nav-item" onMouseEnter={() => showBag(true)} >
                            <a className="nav-link" href="#">
                                <img src={bag} width='20px' className="position-relative" alt='' style={{top: '-2px'}}/>
                                Bag
                            </a>
                        </li>
                        {(function() {
                            if (bag) return (
                            <div onMouseLeave={() => showBag(false)}><Bag /></div>
                            )
                        })()}
                    </ul>
                    {(function() {
                        if (signedinState) return (
                            <div className="signin-link" onMouseEnter={() => dispatch(toggleSignin())}>
                                <a className="nav-link text-white" href="#">SIGN IN</a>
                            </div>
                        )
                        else return (
                            <Link to='/Profile'  >
                                <div className="signin-link" style={{'cursor':'pointer'}}>
                                    <a className="nav-link text-white" >PROFILE</a>
                                </div>
                            </Link>    
                        )
                    })()}                    
                </div>
            </nav>
            {(function() {
                if(signinState) return <PopSignin />
                else if(signupState) return <PopSignup />
            }
            )()}
        </header>
    )
}

function PopSignin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const signinState = useSelector(selectSigninState)
    const dispatch = useDispatch()

    return (
        <div style={styleSheet.wFit} className='position-absolute pt-3 end-0' id="signup-overlay">
            <form className="signin-form pt-4 pb-1 px-4" onMouseLeave={() => dispatch(toggleSignin())}>
                <div className="form-group mb-4">
                    <input name="email" type='text' placeholder="Email Address" className="form-control" 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group mb-4">
                    <input name="password" type='password' placeholder="Password" className="form-control" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group " id="forgotPass">
                    <a href="#" className="text-muted ">Forgot Password</a>
                </div>
                <button type="submit" className="btn btn-dark w-100 mbtn" style={{'fontSize': '1.1rem'}}
                onClick={
                    dispatch(signInUser())
                }>SIGN IN</button>
                <p className="mt-2 mb-2 fw-500 text-center">OR</p>
                <div className="gsignin  mb-2 text-center" data-onsuccess="onSignIn" role='button' style={styleSheet.pointer}>
                    <img src={google} alt='google' className="rounded-circle me-2" style={{'width': '25px'}} />
                    <span>Sign in with google</span>
                </div>
                <h4 className="text-center mt-3" style={styleSheet.pointer} 
                onClick={() => {
                    dispatch(toggleSignin())
                    dispatch(toggleSignup())
                }}>Create Account</h4>
            </form>
        </div>    
    )    
}

function PopSignup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const signinState = useSelector(selectSigninState)
    const dispatch = useDispatch()

    return (
        <div>
            <form className="signin-form pt-2 px-4" onMouseLeave={() => dispatch(toggleSignup())}>
                <div className="form-group mb-4">
                    <input name="email" type='text' placeholder="Email Address" className="form-control" 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group mb-4">
                    <input name="password" type='password' placeholder="Password" className="form-control" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group text-right text-muted" id="forgotPass">
                    <a href="#">Forgot Password</a>
                </div>
                <button type="submit" className="btn btn-dark w-100 mbtn" style={{'fontSize': '1.1rem'}}>SIGN UP</button>
                <p className="mt-2 mb-2 fw-500 text-center">OR</p>
                <div className="gsignin  mb-2 text-center" data-onsuccess="onSignIn" role='button' style={styleSheet.pointer}>
                    <img src={google} alt='google' className="rounded-circle me-2" style={{'width': '25px'}} />
                    <span>Sign up with google</span>
                </div>
                <h4 className="text-center mt-3">Create Account</h4>
            </form>
        </div>    
    )    
}

function Bag() {
    return (
        <div className="d-flex flex-column bag border shadow-sm p-4 position-absolute bg-white">
            <div className="d-flex border-bottom rounded mb-1 align-items-center item py-0">
                <img src={sample} width="20%" height="90px"/>
                <div className='d-flex flex-column py-1 px-3'>
                    <p className="fw-bold my-0">Adire Round Neck shirt</p>
                    <p className="smaller">L’ayo Store </p>
                    <p className="smaller">3 yards</p>
                    <span className="fw-bold mt-2">N15000</span>
                </div>
            </div>
            <div className="d-flex border-bottom rounded mb-1 align-items-center item py-0">
                <img src={sample} width="20%" height="90px"/>
                <div className='d-flex flex-column py-1 px-3'>
                    <p className="fw-bold my-0">Adire Round Neck shirt</p>
                    <p className="smaller">L’ayo Store </p>
                    <p className="smaller">3 yards</p>
                    <span className="fw-bold mt-2">N15000</span>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-outline-dark">View Bag</button>
                <button className="btn btn-dark">Checkout</button>
            </div>
        </div>
    )
}

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer container-fluid pe-5 py-4">
                <div className="row px-5 justify-content-between py-3">
                    <div className="col-md-2">
                        <a href="#" className="navbar-brand pt-0">
                            <span>L’ay<span style={{'fontSize': '1.3rem'}}>ọ̀</span></span>
                            <img src={logo} alt='logo' className="header-logo " />
                        </a>
                        <div className="position-relative navbar-brand" style={{'top': '-5px'}}>
                            <img src={nigeria} alt='logo' className="footer-logo " />    
                            <span style={{'fontFamily': 'Roboto', 'padding': '7px', 'fontSize': '.9rem'}}>NIGERIA</span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5>Partner</h5>
                        <ul className="px-1">
                            <li className="nav-link">Sew with us</li>
                            <li className="nav-link">Sell with us</li>
                            <li className="nav-link">Join our logistics</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>The Company</h5>
                        <ul className="px-1">
                            <li className="nav-link">About us</li>
                            <li className="nav-link">Our Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Support</h5>
                        <ul className="px-1">
                            <li className="nav-link">Help</li>
                            <li className="nav-link">FAQ</li>
                            <li className="nav-link">Report</li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center mt-auto ">
                        <div className="d-flex social-icons justify-content-center">
                            <img src={p} alt='pininterest' />
                            <img src={fb} alt='fb' />
                            <img src={ig} alt='ig' />
                            <img src={w} alt='whatsapp' />
                            <img src={tw} alt='twitter' />
                        </div>
                        <h3 >CONTACT US</h3>
                    </div>
                </div>
                <div className="text-end " style={styleSheet.fw500}>Terms of Service - Privacy - Notice</div>
            </footer>
        )
    }
}


export { Header, Footer } 
