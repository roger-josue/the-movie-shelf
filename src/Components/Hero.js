import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// SWiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import { getPopularMovies } from '../helpers/theMovieDB';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Hero = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then( data => {
            
            setMovies( data );
        });

    }, [])

    return (
        <div className="hero">

            
            <Swiper 
                autoplay={ {delay: 2000} }
                // preloadImages
                // spaceBetween={10}
                navigation
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                        // 400: {
                        //   centeredSlides: false,
                        //   slidesPerView: 2
                        // //   spaceBetween: 20
                        // },
                        450: {
                          slidesPerView: 2
                        //   spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 3
                          //   spaceBetween: 30
                          },
                        900: {
                          slidesPerView: 4
                            // spaceBetween: 20
                        },
                        1370: {
                            slidesPerView: 5
                          }
                }}
                pagination={ {clickable: true} }>

                {
                    movies.map( movie => (
                        <SwiperSlide key={ movie.id } onClick={ ()=> { console.log(`click on ${movie.id}`)}}> 
                        
                            <figure className="card">
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
