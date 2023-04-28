

import React from 'react';
import '../CheckIn/CheckIn.css';
import { Link } from 'react-router-dom';

const CheckIn = () => {
  return (
    <div className="checkin__modal">

      <div className='checkin__content'>
        <h4>Enter your booking site confirmation number:</h4>

        <form >

          <input type="text" autoFocus placeholder='Booking confirmation code' />

          <div>
            <p>Booked through Sonder.com? <Link to='/login'>Login</Link> and visit the "My Stays" page for your check-in details.Booked through Expedia? Check your email for instructions on how to receive your check-in details.</p>
          </div>

          <div>
            <p>Not what you are looking for? <Link to='/contact'>Feel free to contact us.</Link>
            </p>
          </div>

          <button type="submit">Next</button>
          <div>New to Sonder? <Link to='/sign-up'>Create an account »</Link>

            <div>Forgot your password? <Link to='/forget-password'>Reset password »</Link> </div>

          </div>
        </form>
      </div>

    </div>

  )
}

export default CheckIn