import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// SWiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Hero = () => {

    const images = [10,30,70,100,1000];

    return (
        <div>
            
            <Swiper 
                autoplay={ {delay: 2000} }
                // preloadImages
                navigation
                pagination={ {clickable: true} }>
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
