
import Modal from '@mui/material/Modal';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../../assets/sonder_logo_nav.svg';
import '../NavBar/NavBar.css'

// import { currency } from '../../Data/CurrencyData'
// import { language } from '../../Data/LanguageData';

// import USFLAG from '../../assets/us-flag.webp'
// import Language from '../Language/Language';
import CheckIn from '../CheckIn/CheckIn';
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import AboutUs from '../../Pages/AboutUs/AboutUs'
import Support from '../../Pages/Support/Support';
import Responsibility from '../../Pages/Responsibility/Responsibility'
import Blog from '../../Pages/Blog/Blog'
import { useState } from 'react';
// import '../Currency/Currency.css'

// import { currency } from '../../Data/CurrencyData';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [openLang, setOpenLang] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleOpenLang = () => setOpenLang(true)
    const handleClose = () => setOpen(false)

    return (
        <nav>
            <div className="container nav__container">

                <Link to='/'>
                    <img src={NavLogo} alt="Sonder_nav_logo" />
                </Link>

                <div className="nav__left">
                    {/* 
                     <div className='currency'>
                        <button type='button' className='nav__btn btn-c' onClick={handleOpen}>
                            <p>USA</p>
                            <p>($)</p>
                        </button>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <article id='currency--modal'>
                                <p>Select your currency</p>

                                <ul>
                                    {
                                        currency.map(({ code, name, Symbol }) => {
                                            return (
                                                <li key={code}>
                                                    <button type='button' className='currency-c'>
                                                        <p>{code}</p>
                                                        <p>{name}</p>
                                                        <p>({Symbol})</p>
                                                    </button>
                                                </li>

                                            )
                                        })

                                    }

                                </ul>

                            </article>

                        </Modal>


                    </div>  */}

                    {/* <div className='language'>
                        <button type='button' className='nav__btn btn-l' onClick={handleOpenLang}>
                            <img src={USFLAG} alt="flag" />
                            <p>English</p>
                        </button>

                        <Modal
                            open={openLang}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        // disableBackdropClick={true}
                        >
                            <article id='language--modal'>

                                <p>Select your language</p>
                                <ul>
                                    {
                                        language.map(({ id, flag, language }) => {
                                            return (
                                                <li key={id}>
                                                    <button type='button' className='lanuage-l'>
                                                        <img src={flag} alt={language} />
                                                        <p>{language}</p>

                                                    </button>
                                                </li>

                                            )
                                        })

                                    }

                                </ul>


                            </article>

                        </Modal>


                        <div className='language__pop'>

                        </div>

                        <Language />
                    </div>  */}

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