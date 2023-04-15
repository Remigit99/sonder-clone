
import React from 'react';
import '../Home/Home.css';
import Search from '../../components/Search/Search';
import CheckInOut from '../../components/CheckInOut/CheckInOut'
import Guest from '../../components/Guest/Guest'
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import { HeaderSlideData } from '../../Data/HeaderSlideData';
// import LocationIcon from '../../assets/vector7.svg';
import { TfiLocationPin } from 'react-icons/tfi';

import Chicago from '../../assets/Chicago.png';
import Miami from '../../assets/Miami.png';
import NewOrleans from '../../assets/New_Orleans.png';
import NewYork from '../../assets/New_York_City.png';
import London from '../../assets/London.png';
import MobileImg from '../../assets/tech_value_transparent.png'

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
                                                <p>{info}</p>
                                                <p>{service}</p>
                                            </div>
                                        </article>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className="services__right">
                        <div className="services__misc">
                            <img src={MobileImg} alt="tech_value" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home;