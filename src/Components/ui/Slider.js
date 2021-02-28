import React from 'react';
import PropTypes from 'prop-types';
// SWiper
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// SWiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import { Card } from './Card';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Slider = ({ slides, title, type="movie" }) => {


    return (
        <div className="slider">
            <h1 className="slider__title">{ title}</h1>
            <Swiper 
                // autoplay={ {delay: 2000} }
                navigation
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                        450: {
                          slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 4
                          },
                        900: {
                          slidesPerView: 5
                        },
                        1370: {
                            slidesPerView: 6
                          }
                }}
                pagination={ {clickable: true} }>

                {
                    (type === 'movie') &&
                    (
                        slides.slice(0,20).map( slide => (
                            <SwiperSlide key={ slide.id } onClick={ ()=> { console.log(`click on ${slide.id}`)}}> 
                                <Card name={slide.title} thumbnail={slide.poster_path} overview={slide.overview} />
                            </SwiperSlide>
                        ))
                    )
                }

                {
                    (type === 'tv') && 
                    (
                        slides.slice(0,20).map( slide => (
                            <SwiperSlide key={ slide.id } onClick={ ()=> { console.log(`click on ${slide.id}`)}}> 
                                <Card name={slide.name} thumbnail={slide.poster_path} overview={slide.overview} />
                            </SwiperSlide>
                        ))
                    ) 
                }

                {
                    (type === 'celeb') && 
                    (
                        slides.slice(0,20).map( slide => (
                            <SwiperSlide key={ slide.id } onClick={ ()=> { console.log(`click on ${slide.id}`)}}> 
                                <Card name={slide.name} thumbnail={slide.profile_path} />
                            </SwiperSlide>
                        ))
                    ) 
                }

            </Swiper>
        </div>
    )
}


Slider.propTypes = {
    slides: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}
