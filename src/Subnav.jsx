import React from 'react'
import { Link } from 'react-router-dom'
const Subnav = () => {
    return (
        <>
            <div  className="container-fluid bar">
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
                </div>
            </div>
        </>









    )
}

export default Subnav