import React from 'react';
import { useSelector } from 'react-redux';
import { Hero } from '../Hero';
import { Slider } from '../ui/Slider';

export const HomeScreen = () => {

   
    const { movies, tv, celebs } = useSelector(state => state);
    
    const { onTheaters } = movies;
    const { popularShows } = tv;
    const { popularCelebrities } = celebs;
    
    

    return (
        <div className="screen">
            <Hero />

            <Slider slides={ onTheaters } title="On Theaters"/>
            
            <Slider type="tv" slides={ popularShows } title="Popular On Tv"/>

            <Slider type="celeb" slides={ popularCelebrities } title="Popular Celebrities"/>
        </div>
    )
}
