import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <>
    <footer className='footer p-4 pt-5'>
        <div className="container footer text-center">
          <div className="row">
            <div className="col-6">
              <h5 className='fu'>© Styles Conference
              </h5>
            </div>
            <div className="col-4">
              <ul className='list-unstyled d-flex justify-content-between'>
                <li><Link to={'/'} style={{ fontFamily: "'Roboto', sans-serif" }} className='text-decoration-none items'>Home</Link></li>
                <li><Link to={'/speaker'} style={{ fontFamily: "'Roboto', sans-serif" }} className='text-decoration-none items'>Speakers</Link></li>
                <li><Link to={'/schedule'} style={{ fontFamily: "'Roboto', sans-serif" }} className='text-decoration-none items '>Schedule</Link></li>
                <li><Link to={'/ven'} style={{ fontFamily: "'Roboto', sans-serif" }} className='text-decoration-none items'>Venue</Link></li>
                <li><Link to={'/register'} style={{ fontFamily: "'Roboto', sans-serif" }} className='text-decoration-none items'>Register</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

   </>
  )
}

export default Footer