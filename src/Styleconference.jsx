import React from 'react'
console.log(React)
import Nav from './Nav'
console.log(Nav)

// import { Link } from 'react-router-dom'

const Styleconference = () => {
  return (
    <div>
      {/* <Link to={'/'}></Link> */}
     {/* SPEAKER IMAGE */}
      <div className="container col-8 mt-4 ">
        <div className="row">
          <div className='col-4'>
            <h6 className='lh-lg car'>SPEAKERS</h6>
            <div className="card w-100 border border-0">
              <img src="/src/assests/speakers.jpg" alt="" className='img-fluid card-img-top' />
              <div className="card-body">
                <h5 style={{ fontFamily: "'Roboto', sans-serif" }} className='t fw-bold'>World-Class Speakers</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }} className='p'>Joining us from all around the world are over twenty fantastic speakers, here to share their stories.</p>
              </div>
            </div>
          </div>
          {/* SCHEDULE IMAGE */}
          <div className='col-4' >
            <h6 className='car lh-lg'>SCHEDULE</h6>
            <div className="card w-100 border border-0">

              <img src="/src/assests/schedule.jpg" alt="" className='img-fluid card-img-top' />
              <div className="card-body">
                <h5 style={{ fontFamily: "'Roboto', sans-serif" }} className='t fw-bold'>Three Inspiring Days</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }} className='p'>Enjoy three inspiring and action-packed days of tals, gatherings, and all-around good times.</p>
              </div>
            </div>
          </div>
          {/* VENUE IMAGE */}
          <div className='col-4'>
            <h6 className='car lh-lg'>VENUE</h6>
            <div className="card w-100 border border-0">
              <img src="/src/assests/venue.jpg" alt="" className='img-fluid card-img-top' />
              <div className="card-body">
                <h5 style={{ fontFamily: "'Roboto', sans-serif", }} className='t fw-bold'>The Chicago Theatre</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }} className='p'>Within the heart of downtown Chicago, The Chicago Theatre will provide a beautiful conference venue.</p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}
export default Styleconference
