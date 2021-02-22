import React from 'react';

// SWiper
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// SWiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Slider = ({ slides, title, type="movie" }) => {


    return (
        <div className="slider">
            <h1 className="slider__title">{ title}</h1>
            <Swiper 
                // autoplay={ {delay: 2000} }
                // preloadImages
                // spaceBetween={10}
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
                    (type === 'movie') ?
                    (
                        slides.slice(0,20).map( slide => (
                            <SwiperSlide key={ slide.id } onClick={ ()=> { console.log(`click on ${slide.id}`)}}> 
                            
                                <figure className="card">
                                    <img className="card__image" src={slide.poster_path} alt={slide.title}/>
                                    <figcaption className="card__body">
                                        <h3 className="card__body__title">{ slide.title}</h3>
                                        <p className="card__body__desc">{`${slide.overview.slice(0,70)}...`}</p>
                                    </figcaption>
                                </figure>

                            </SwiperSlide>
                        ))
                    )
                    : 
                    (
                        slides.slice(0,20).map( slide => (
                            <SwiperSlide key={ slide.id } onClick={ ()=> { console.log(`click on ${slide.id}`)}}> 
                            
                                <figure className="card">
                                    <img className="card__image" src={slide.poster_path} alt={slide.name}/>
                                    <figcaption className="card__body">
                                        <h3 className="card__body__title">{ slide.name}</h3>
                                        <p className="card__body__desc">{`${slide.overview.slice(0,70)}...`}</p>
                                    </figcaption>
                                </figure>

                            </SwiperSlide>
                        ))
                    ) 
    
                }

            </Swiper>
        </div>
    )
}
