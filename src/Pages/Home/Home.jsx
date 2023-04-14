
import React from 'react';
import '../Home/Home.css';
import { HeaderSlideData } from '../../Data/HeaderSlideData';
// import LocationIcon from '../../assets/vector7.svg';
import { TfiLocationPin } from 'react-icons/tfi';

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

            <div className="search__space">

            </div>
        </>
    )
}

export default Home;