import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
const Nav = () => {
    let navigate = useNavigate()
    return (
        <>
            <div id='navbar' className="container-fluid">
                <div className="container ">
                    <div className="row d-flex align-items-center justify-content-evenly ">
                        <div className="col-6">
                            <p id='ttf'
                                className='fw-light lh-1  '>
                                STYLES <br /> CONFERENCE
                            </p>

                        </div>

                        <div className="col-6">
                            <div className="row text-center">
                                <div className="col-12">
                                    <h4 style={{ fontFamily: "'Roboto', sans-serif", marginTop: "60px" }} className='fw-light lh-lg date'>August 24–26th — Chicago, IL</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <ul className='list-unstyled d-flex justify-content-evenly'>
                                        <li><Link to={'/home'} className='text-decoration-none items'>HOME</Link></li>
                                        <li><Link to={'/speaker'} className='text-decoration-none items'>SPEAKERS</Link></li>
                                        <li><Link to={'/schedule'} className='text-decoration-none items '>SCHEDULE</Link></li>
                                        <li><Link to={'/ven'} className='text-decoration-none items'>VENUE</Link></li>
                                        <li><Link to={'/register'} className='text-decoration-none items'>REGISTER</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-5"> 
                        <div className="col-12 text-center">
                            <h1 style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-lighter lh-sm date'>Dedicated to the Craft of Building Websites</h1>
                            <h4 style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-lighter lh-sm text-white'>Every year the brightest web designers and front-end developers descend on</h4>
                            <h4 style={{ fontFamily: "'Roboto', sans-serif" }} className='fw-lighter lh-sm text-white'>Chicago to discuss the latest tech logies. Join us this August!</h4>
                            <button id='button' className='mt-4' onClick={()=>navigate('/register')}>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Nav