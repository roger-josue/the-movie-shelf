import React from 'react';
import { useSelector } from 'react-redux';

// SWiper
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// SWiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Hero = () => {

    const { popular } = useSelector(state => state.movies);


    return (
        <div className="hero">

            <Swiper 
                autoplay={ {delay: 2000} }
                // preloadImages
                // spaceBetween={10}
                navigation
                slidesPerView={1}
                breakpoints={{
                        450: {
                          slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                          },
                        900: {
                          slidesPerView: 4
                        }
                }}
                pagination={ {clickable: true} }>

                {
                    popular.slice(0,10).map( movie => (
                        <SwiperSlide key={ movie.id } onClick={ ()=> { console.log(`click on ${movie.id}`)}}> 
                        
                            <figure className="card card--big">
                                <img className="card__image" src={movie.poster_path} alt={movie.title}/>
                                <figcaption className="card__body">
                                    <h3 className="card__body__title">{ movie.title}</h3>
                                    <p className="card__body__desc">{`${movie.overview.slice(0,100)}...`}</p>
                                </figcaption>
                            </figure>

                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}
