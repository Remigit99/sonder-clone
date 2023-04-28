<FaApple />
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import '../SignUp/SignUp.css'

const SignUp = () => {
    return (
        <div className='signup__alt'>
            <article className="signup__main">

                <p>Sign up for access to member pricing</p>
                <input type="email" name="email" id="email" placeholder='Email address' />

                <button type="submit" className='continue'>Continue</button>

                <div><p>or</p></div>

                <div className='signup__btn'>
                    <button type='button'>
                        <FcGoogle />
                        Google
                    </button>
                    <button type='button'>
                        <FaFacebookF />
                        Facebook
                    </button>
                    <button type='button'>
                        <FaLinkedin />
                        LinkedIn
                    </button>
                    <button type='button'>
                        <FaApple />
                        Apple
                    </button>
                </div>

                <div className="terms">
                    By providing your email address, you agree to our <a href="https://google.com" target="_blank">Privacy Policy</a>  and <a href="https://google.com" target="_blank">Terms of Service</a>
                </div>
            </article>
        </div>
    )
}

export default SignUp