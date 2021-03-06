import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startfetchNextPopularCelebsPage } from '../../actions/celebs';
import { Card } from '../ui/Card';

export const CelebsScreen = () => {
    
    const { popularCelebrities, popularCelebsPage } = useSelector(state => state.celebs);

    const dispatch = useDispatch();
    
    const handleNext = () => {
        dispatch( startfetchNextPopularCelebsPage() );
    }

    return (
        <div className="screen">
            
            <div className="cards">
                {
                    popularCelebrities.map( celeb => (
                        <Card key={ celeb.id } name={celeb.name} thumbnail={celeb.profile_path} />
                    ))
                }
                <div className="cards__load">
                    <button 
                        className="cards__load__btn fadeIn"
                        onClick={ handleNext }
                        disabled={ (popularCelebsPage === 500) && true }>Load more <i className="fas fa-arrow-down"></i>
                            {/* <i className="fas fa-spinner fa-spin"></i> */}
                    </button>
                </div>

            </div>

        </div>
    )
}
