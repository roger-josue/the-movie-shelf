import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUpSelectedCeleb, startfetchCelebDetails } from '../../actions/celebs';

export const CelebScreen = () => {
    
    const { id } = useParams();
    const { selectedCelebrity } = useSelector(state => state.celebs)
    const dispatch = useDispatch();
 
     useEffect(() => {
         dispatch( startfetchCelebDetails( id ) );
         return () => {
             dispatch( cleanUpSelectedCeleb() );
         }
     }, [id, dispatch ])
    
    return (
        <div className="screen">
            <h1>Celebrity Screen</h1>
            <code>
                {
                JSON.stringify( selectedCelebrity )
                }
            </code>
        </div>
    )
}
