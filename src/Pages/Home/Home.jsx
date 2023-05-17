
import React from 'react';
import '../Home/Home.css';
import Search from '../../components/Search/Search';
import CheckInOut from '../../components/CheckInOut/CheckInOut'
import Guest from '../../components/Guest/Guest'
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import { HeaderSlideData } from '../../Data/HeaderSlideData';
import { storiesData } from '../../Data/StoriesData';
// import LocationIcon from '../../assets/vector7.svg';
import { TfiLocationPin, TfiQuoteLeft, TfiQuoteRight } from 'react-icons/tfi';

import Chicago from '../../assets/Chicago.png';
import Miami from '../../assets/Miami.png';
import NewOrleans from '../../assets/New_Orleans.png';
import NewYork from '../../assets/New_York_City.png';
import London from '../../assets/London.png';
import MobileImg from '../../assets/tech_value_transparent.png';
import TechVideo from '../../assets/tech-value-video.mp4'
import Gstore from '../../assets/download_android.png';
import Astore from '../../assets/download_apple.png';
import NYTimes from '../../assets/nyt_logo.svg';
import Google from '../../assets/google_reviews.svg';
import PostComp from '../../assets/gr_fastco.svg';

import { services } from '../../Data/ServicesData';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper";
import Footer from '../../components/Footer/Footer';



const Home = () => {
    return (
        <>
            <Swiper

                spaceBetween={0}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, EffectFade]}
                className="mySwiper "

            >
                {
                    HeaderSlideData.map(({ id, location, stayStatus, slideImg }) => {
                        return (

                            <SwiperSlide className="hero__slide" key={id}>
                                <div className="slide__img">
                                    <img src={slideImg} alt={location} className='slider__img' />
                                </div>

                                <div className="hero__overlay-text">
                                    <h1>A better way to stay</h1>
                                    <p>
                                        Inspiring, award-winning design meets modern, mobile-first service. Welcome to the future of hospitality.
                                    </p>

                                    <small>
                                        <TfiLocationPin className="location__icon" />  {location} | {stayStatus}
                                    </small>
                                </div>
                            </SwiperSlide>

                        )
                    })


                }
            </Swiper>

            <div className="search__check">
                <div className="search__area">
                    <Search />
                    |<CheckInOut />|
                    <Guest />
                    <SearchBtn />

                </div>
            </div>

            <section id="choice">
                <div className="container choice__container">

                    <div className="choice__header">
                        <h1>A world of choice</h1>
                        <p>From a room for a night to a loft for as long as you like, there's a Sonder for every occassion.</p>
                    </div>

                    <div className="choice__main">

                        <div className="choice__main-left">

                            <article className="neighborhood" >
                                <div className="neighborh__img">
                                    <img src={Chicago} alt="Chicago Img" />
                                </div>

                                <div className="neighborbhood__info">
                                    <h6>6 NEIGHBORHOODS</h6>
                                    <h3> Chicago </h3>
                                </div>
                            </article>

                            <article className="neighborhood" >
                                <div className="neighborh__img">
                                    <img src={Miami} alt="Miama Img" />
                                </div>

                                <div className="neighborbhood__info">
                                    <h6>4 NEIGHBORHOODS</h6>
                                    <h3> Maimi </h3>
                                </div>
                            </article>

                        </div>

                        <div className="choice__main-middle">
                            <article className="neighborhood" >
                                <div className="neighborh__img">
                                    <img src={London} alt="London Img" />
                                </div>

                                <div className="neighborbhood__info">
                                    <h6>14 NEIGHBORHOODS</h6>
                                    <h3> London </h3>
                                </div>
                            </article>
                        </div>

                        <div className="choice__main-right">

                            <article className="neighborhood" >
                                <div className="neighborh__img">
                                    <img src={NewOrleans} alt="New Orleans Img" />
                                </div>

                                <div className="neighborbhood__info">
                                    <h6>10 NEIGHBORHOODS</h6>
                                    <h3> New Orleans </h3>
                                </div>
                            </article>

                            <article className="neighborhood" >
                                <div className="neighborh__img">
                                    <img src={NewYork} alt="New York Img" />
                                </div>

                                <div className="neighborbhood__info">
                                    <h6>4 NEIGHBORHOODS</h6>
                                    <h3> New York City </h3>
                                </div>
                            </article>

                        </div>



                    </div>

                    <div className="view__cities">
                        <button className="btn__sec" >
                            View all 40+ cities
                        </button>
                    </div>



                </div>
            </section>

            <section id="services">
                <div className="container services__container">
                    <div className="services__left">
                        <h2>Everything you need is just a tap away</h2>
                        <p>
                            From fresh towels to late checkout, our apps puts you in control. You stay, your way.
                        </p>

                        <div className="services__main">

                            {
                                services.map(({ id, icon, service, info }) => {
                                    return (
                                        <article className="service" key={id}>

                                            <div className="service__icon">
                                                <img src={icon} alt={info} />
                                            </div>
                                            <div className="service__content">
                                                <h6>{info}</h6>
                                                <h6>{service}</h6>
                                            </div>
                                        </article>
                                    )
                                })
                            }

                        </div>

                        <div className="downloads">
                            <a href="https://play.google.com/" target='_blank'>
                                <img src={Gstore} alt="google__play" />
                            </a>

                            <a href="https://apps.apple.com/" target='_blank'>
                                <img src={Astore} alt="apple__play" />
                            </a>
                        </div>
                    </div>

                    <div className="services__right">
                        <div className="services__misc">
                            <img src={MobileImg} alt="tech_value" />
                            <video autoPlay loop preload='auto' controlsList="nodownload nofullscreen noremoteplayback">
                                <source src={TechVideo} />
                            </video>
                        </div>
                    </div>


                </div>
            </section>

            <section id="features">
                <div className="features">
                    <article className="feature">
                        <div className="nyt_img" >
                            <img src={NYTimes} alt="New York Times Logo" />
                        </div>

                        <p>The next billion-dollar startups 2019</p>
                    </article>

                    <article>
                        <div className="google__img">
                            <img src={Google} alt="google__img" />
                        </div>
                    </article>

                    <article className="feature">
                        <div className="post_img">
                            <img src={PostComp} alt="Post Company Logo" />
                        </div>

                        <p>
                            The world's #1 most innovative travel company of 2019
                        </p>
                    </article>
                </div>
            </section>

            <section id="locations">
                <div className="container locations__container">
                    <div className="locations__header">
                        <h1>A stay infused with creativity and culture</h1>
                        <p>From award-winning interiors to curated neighborhood guides, our stays celebrate what's special about each city we call home.</p>
                    </div>

                    <div className="location__cities">

                        <ul className='cities__list'>

                            <li>
                                <button type='button'><p>Philadelphia</p></button>
                            </li>
                            <li>
                                <button type='button'><p>London</p></button>
                            </li>
                            <li>
                                <button type='button'><p>Orlando</p></button>
                            </li>
                            <li>
                                <button type='button'><p>Detroit</p></button>
                            </li>
                            <li>
                                <button type='button'><p>Huston</p></button>
                            </li>

                        </ul>


                    </div>

                    <div className="locations__content">

                        {
                            <article className="location__content">


                            </article>
                        }
                    </div>

                </div>
            </section>

            <section id="amenities">
                <div className="container amenities__container">
                    <div className="amenities__left">
                        <h2>Hotel amenities without hotel formality</h2>
                        <p>From simple self check-in to boutique bathroom amenities, we bring the best of a hotel without any of the formality.</p>
                        <button className='search__btn'>Play video</button>
                    </div>


                    <div className="amenities__right"></div>

                </div>
            </section>

            <section className="stories">
                <div className="container stories__container">
                    <div className="story__header">
                        <h3>Every stay has a story</h3>
                        <p>It's hard to explain what makes Sonder so special. Unless, of course,you're one of our guests.</p>
                    </div>

                    {/* swiper js for stories */}
                    <Swiper

                        spaceBetween={10}
                        slidesPerView={3}
                        effect={'fade'}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Autoplay, Pagination, EffectFade]}
                        className="mySwiper "

                    >
                        {
                            storiesData.map(({ id, story, name, city }) => {
                                return (
                                    <SwiperSlide className="story__slide" key={id}>


                                        <TfiQuoteLeft />
                                        <h4>{story}</h4>
                                        <TfiQuoteRight />
                                        <div className="story__info">
                                            <h5>{name}</h5>
                                            <small>{city}</small>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>

            <Footer />


        </>
    )
}

export default Home;