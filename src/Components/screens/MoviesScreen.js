import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startfetchNextPopularPage } from '../../actions/movies';
import { Card } from '../ui/Card';

export const MoviesScreen = () => {

    const { popular } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(popular);
    }, [popular])

    const handleNext = () => {
        dispatch( startfetchNextPopularPage() );
    }


    return (
        <div className="screen">

            <div className="cards">
                {
                    popular.map( movie => (
                        <Card key={ movie.id } name={movie.title} thumbnail={movie.poster_path} overview={movie.overview} />
                    ))
                }
                <div className="cards__load">
                    <button 
                        className="cards__load__btn"
                        onClick={ handleNext } 
                    >
                        Load more <i className="fas fa-arrow-down"></i>
                            {/* <i className="fas fa-spinner fa-spin"></i> */}
                    </button>
                </div>

            </div>


        </div>
    )
}
