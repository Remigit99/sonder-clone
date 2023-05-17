
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../../assets/sonder_logo_nav.svg';
import '../NavBar/NavBar.css'
import Currency from '../Currency/Currency';
import USFLAG from '../../assets/us-flag.webp'
import Language from '../Language/Language';
import CheckIn from '../CheckIn/CheckIn';
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import AboutUs from '../../Pages/AboutUs/AboutUs'
import Support from '../../Pages/Support/Support';
import Responsibility from '../../Pages/Responsibility/Responsibility'
import Blog from '../../Pages/Blog/Blog'
// import { currency } from '../../Data/CurrencyData';

const NavBar = () => {
    return (
        <nav>
            <div className="container nav__container">

                <Link to='/'>
                    <img src={NavLogo} alt="Sonder_nav_logo" />
                </Link>

                <div className="nav__left">

                    <div className='currency'>
                        <button type='button' className='nav__btn btn-c'>
                            <p>USA</p>
                            <p>($)</p>
                        </button>

                        <Currency />
                    </div>

                    <div className='language'>
                        <button type='button' className='nav__btn btn-l'>
                            <img src={USFLAG} alt="flag" />
                            <p>English</p>
                        </button>

                        <Language />
                    </div>

                    {/* check In */}
                    <div className='checkin'>
                        <button type='button' className='nav__btn btn-l'>
                            <p>Check In</p>
                        </button>

                        <CheckIn className='check__modal' />
                    </div>

                    {/* Login */}
                    <div className='login'>
                        <button type='button' className='nav__btn btn-login'>
                            <p>Login</p>
                        </button>

                        <Login className='login__modal' />
                    </div>

                    {/* Sign Up */}
                    <div className='sign-up'>
                        <button type='button' className='nav__btn btn-signup'>
                            <p>Sign Up</p>
                        </button>

                        <SignUp className='signup__modal' />
                    </div>

                    {/* More */}
                    <div className="more">
                        <AiOutlineMenu className='menu__btn' />
                        <div className="more__modal">
                            <Link to='/about-us'>
                                <AboutUs />
                            </Link>
                            <Link to='/business'>

                            </Link>
                            <Link to='/support'>
                                <Support />
                            </Link>
                            <Link to='/reponsibility'>
                                <Responsibility />
                            </Link>
                            <Link to='/blog'>
                                <Blog />
                            </Link>
                        </div>

                    </div>




                </div>



            </div>
        </nav>
    )
}

export default NavBar