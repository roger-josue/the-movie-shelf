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

    const images = [10,30,70,100,1000];
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        
        getPopularMovies().then( data => {
            
            setMovies( data );
        })
    }, [])

    return (
        <div>
            
            <Swiper 
                autoplay={ {delay: 2000} }
                // preloadImages
                navigation
                pagination={ {clickable: true} }>
                {/* {
                    movies.map( movie => (
                        <SwiperSlide key={ movie.id }> 
                            <img src={} alt={`slide-${img}`}/>
                        </SwiperSlide>
                    ))
                } */}
                {
                    images.map( img => (
                        <SwiperSlide key={`image-${img}`}> 
                            <img src={`https://picsum.photos/id/${img}/200/300`} alt={`slide-${img}`}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}
