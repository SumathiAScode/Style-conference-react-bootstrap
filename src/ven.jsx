import React from 'react'
import Nav from './Nav'

const Ven = () => {
    return (
        <>
            <div className="container-fluid  speaker p-3 pb-5">
                <div className="container">
                    <div className="row text-center ">
                        <div className="col-12">
                            <h1 style={{ fontWeight: "400" }} className='lh-lg sh '>Venue</h1>
                            <h4 style={{ fontWeight: "300" }} className='lh-sm sp'>The conference is held at The Chicago Theatre, a beautiful historical landmark. The conference hotel, Four Seasons, is a short walk away down State Street.</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-5 d-flex flex-column  align-items-center ">
                <div className="row  pt-5">
                    <div className="col-5 pt-5 ps-5">
                        <h5 className='v'>Chicago Theatre</h5>
                        <p className='m'>175 N State St
                            Chicago, IL 60601</p>
                        <h6 className='v'>thechicagotheatre.com</h6>
                        <p className='m'>(312) 462-6300 </p>
                        
                    </div>
                    <div className="col-7">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40341.120459223006!2d80.124129249902!3d12.945785445273364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb1cef75f81%3A0xe2956fefeaa0fa80!2sChromepet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1740568450048!5m2!1sen!2sin" width="600" height="250" loading="lazy" ></iframe>


                    </div>
                </div>


                <div className="row pt-5">
                    <div className="col-5 pt-5 ps-5">
                        <h5 className='v'>Four Seasons</h5>
                        <p className='m'>
                            120 E Delaware PI
                            Chicago, IL 60611</p>
                        <h6 className='v'>fourseasons.com</h6>
                        <p className='m'>(312) 280-8800</p>
                    </div>
                    <div className="col-7 ">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40341.120459223006!2d80.124129249902!3d12.945785445273364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb1cef75f81%3A0xe2956fefeaa0fa80!2sChromepet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1740568450048!5m2!1sen!2sin" width="600" height="250" loading="lazy" ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ven