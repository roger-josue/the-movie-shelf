import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../ui/Card';

export const CelebsScreen = () => {
    
    const { popularCelebrities } = useSelector(state => state.celebs);

    return (
        <div className="screen">
            
            <div className="cards">
                {
                    popularCelebrities.map( celeb => (
                        <Card key={ celeb.id } name={celeb.name} thumbnail={celeb.profile_path} />
                    ))
                }
                <div className="cards__load">
                    <button className="cards__load__btn fadeIn">Load more <i className="fas fa-arrow-down"></i>
                            {/* <i className="fas fa-spinner fa-spin"></i> */}
                    </button>
                </div>

            </div>

        </div>
    )
}
