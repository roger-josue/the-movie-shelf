import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../ui/Card';

export const TvShowsScreen = () => {

    const { popularShows } = useSelector(state => state.tv);

    return (
        <div className="screen">
            
            <div className="cards">
                {
                    popularShows.map( show => (
                        <Card key={ show.id } name={show.name} thumbnail={show.poster_path} overview={show.overview} />
                    ))
                }
                <div className="cards__load fadeIn">
                    <button className="cards__load__btn">Load more <i className="fas fa-arrow-down"></i>
                            {/* <i className="fas fa-spinner fa-spin"></i> */}
                    </button>
                </div>

            </div>

        </div>
    )
}
