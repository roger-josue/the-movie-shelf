import React from 'react';
import { useSelector } from 'react-redux';
import { Hero } from '../Hero';
import { Slider } from '../ui/Slider';

export const HomeScreen = () => {

   
    const { movies, tv } = useSelector(state => state);
    
    const { onTheaters } = movies;
    const { popularShows } = tv;
    
    

    return (
        <div className="screen">
            <Hero />

            <Slider slides={ onTheaters } title="On Theaters"/>
            
            <Slider type="tv" slides={ popularShows } title="Popular On Tv"/>

            <Slider slides={ onTheaters } title="Popular Celebrities"/>
        </div>
    )
}
