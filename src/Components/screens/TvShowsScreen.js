import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { startfetchNextPopularTvShowsPage } from '../../actions/tv';
import { Card } from '../ui/Card';

export const TvShowsScreen = () => {

    const { popularShows, popularShowsPage } = useSelector(state => state.tv);
    const dispatch = useDispatch();

    const location = useLocation();
    
    const handleNext = () => {
        dispatch( startfetchNextPopularTvShowsPage() );
    }

    return (
        <div className="screen">
            
            <div className="cards">
                {
                    popularShows.map( show => (
                        <Card key={ show.id } path={location.pathname} id={show.id} name={show.name} thumbnail={show.poster_path} overview={show.overview} />
                    ))
                }
                <div className="cards__load fadeIn">
                    <button 
                        className="cards__load__btn"
                        onClick={ handleNext }
                        disabled={ (popularShowsPage === 500) && true }>Load more <i className="fas fa-arrow-down"></i>
                            {/* <i className="fas fa-spinner fa-spin"></i> */}
                    </button>
                </div>

            </div>

        </div>
    )
}
