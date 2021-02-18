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
    const [imgPerView, setImgPerView] = useState(1);

    useEffect(() => {
        
        getPopularMovies().then( data => {
            
            setMovies( data );
        })


        // Set movies per view when initializing swiper
        if(window.innerWidth >= 1000){
            setImgPerView(3);
        }
        if(window.innerWidth >= 500 && window.innerWidth <= 999 ){
            setImgPerView(2);
        }
        // if no enter one of the above options, sets the swiper to only one movie per view

        // Event for controlling swiper responsiveness
        window.addEventListener('resize', () =>{

            if( window.innerWidth < 500){
                setImgPerView(1);
            }
            if( window.innerWidth >= 500){
                setImgPerView(2);
            }
            if( window.innerWidth >= 1000){
                setImgPerView(3);
            }

        });

        return () => {
            window.removeEventListener('resize',window);
        }


    }, [])

    return (
        <div className="hero">

            <h1 className="hero__title"><span className="hero__title--big">Welcome</span>, <br /> Explore your favorite movies, Tv shows and celebrities</h1>
            
            <Swiper 
                autoplay={ {delay: 2000} }
                // preloadImages
                navigation
                slidesPerView={imgPerView}
                pagination={ {clickable: true} }>

                {
                    movies.map( movie => (
                        <SwiperSlide key={ movie.id } onClick={ ()=> { console.log(`click on ${movie.id}`)}}> 
                        {/* create card for every movie */}
                            <img src={movie.backdrop_path} alt={movie.title}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}
