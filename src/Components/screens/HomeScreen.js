import React from 'react';
import { Hero } from '../Hero';

export const HomeScreen = () => {
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
