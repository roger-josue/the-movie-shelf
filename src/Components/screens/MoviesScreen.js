import React from 'react'
import { useSelector } from 'react-redux';
import { Card } from '../ui/Card';

export const MoviesScreen = () => {

    const { popular } = useSelector(state => state.movies);


    return (
        <div className="screen">

            <div className="cards">
                {
                    popular.map( movie => (
                        <Card key={ movie.id } name={movie.title} thumbnail={movie.poster_path} overview={movie.overview} />
                    ))
                }
                <div className="cards__load">
                    <button className="cards__load__btn">Load more <i className="fas fa-arrow-down"></i>
                            {/* <i className="fas fa-spinner fa-spin"></i> */}
                    </button>
                </div>

            </div>


        </div>
    )
}
