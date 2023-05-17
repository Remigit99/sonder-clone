
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article className="footer__company">
                    <h5>COMPANY</h5>
                    <ul>
                        <Link to='/about-us'>About Us</Link>
                        <Link to='/news'>News</Link>
                        <Link to='/careers'>Careers</Link>
                        <Link to='/press'>Press</Link>
                        <Link to='/business'>Business and Group</Link>
                        <Link to='/real-estate'>Real Estate</Link>
                        <Link to='/corporate'>Corporate Responsibility</Link>
                        <Link to='/investor'>Investor Relations</Link>
                        <Link to='/slavery-act'>Modern Slavery Act</Link>
                        <Link to='/biometrics'>Biometrics Policy</Link>
                    </ul>
                </article>

                <article className="footer__support">
                    <h5>SUPPORT</h5>
                    <Link to='/support'>
                        Help Center
                    </Link>
                </article>

                <article className="footer__social">
                    <h5>SOCIAL</h5>

                </article>

                <article className='lang-currency'>
                    <article className="lang">
                        <h5>LANGUAGE</h5>
                        <select name="" id="">
                            <option value="gb">English(GB)</option>
                        </select>
                    </article>

                    <article className="footer__currency">
                        <h5>CURRENCY</h5>
                        <select name="" id="">
                            <option value="usd">
                                USD($)
                            </option>
                        </select>
                    </article>
                </article>
            </div>
        </footer>
    )
}

export default Footer