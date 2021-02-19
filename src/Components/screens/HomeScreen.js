import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startfetchPopularMovies } from '../../actions/movies';
import { Hero } from '../Hero';

export const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch( startfetchPopularMovies() );
        
    }, [dispatch])
    return (
        <div className="screen">
            <Hero />

            <h2>On theaters</h2>
            <Hero />

            <h2>Popular On Tv</h2>
            <Hero />

            <h2>Popular Actors</h2>
            <Hero />
        </div>
    )
}
