

import React from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import GoogleAuth from '../../Auth/GoogleAuth';
import FacebookAuth from '../../Auth/FacebookAuth';
import LinkedinAuth from '../../Auth/LinkedInAuth';
import AppleAuth from '../../Auth/AppleAuth';

const Login = () => {
    return (
        <div className='login__modal'>
            <div className="login__main">
                <h4>Login</h4>
                <div>
                    <form >
                        <input type="email" name="email" id="email" placeholder='Email address' />

                        <input type="password" name="password" id="password" placeholder='Password' />

                        <div id='forgot'>Forgot your password? <Link to='/forget-password'>Reset password</Link>
                        </div>

                        <div className="login__alt">
                            <GoogleAuth />
                            <FacebookAuth />
                            <LinkedinAuth />
                            <AppleAuth />
                        </div>

                        <div id='sign-up'>Don't have an account? <Link to='/sign-up'>Sign up</Link>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login