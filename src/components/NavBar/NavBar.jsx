
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../../assets/sonder_logo_nav.svg';
import '../NavBar/NavBar.css'
import Currency from '../Currency/Currency';

const NavBar = () => {
    return (
        <nav>
            <div className="container nav__container">

                <Link to='/'>
                    <img src={NavLogo} alt="Sonder_nav_logo" />
                </Link>

                <div className="nav__left">

                    <ul className="nav__links">
                        <li className='nav__li'>
                            <NavLink >
                                <div className="main__currency">
                                    USD ($)
                                </div>
                                <Currency className='nav__list' />
                            </NavLink>
                        </li>


                        <li><NavLink > English</NavLink></li>
                        <li><NavLink > Check In</NavLink></li>
                        <li><NavLink > Log In</NavLink></li>
                        <li><NavLink > Sign Up</NavLink></li>
                    </ul>

                    <AiOutlineMenu className='menu__btn' />



                </div>



            </div>
        </nav>
    )
}

export default NavBar