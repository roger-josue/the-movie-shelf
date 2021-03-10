import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { cleanUpSelectedShow, startfetchShowDetails } from '../../actions/tv';

export const TvShowScreen = () => {

    const { id } = useParams();
    const { selectedTvShow } = useSelector(state => state.tv)
    const dispatch = useDispatch();
 
     useEffect(() => {
         dispatch( startfetchShowDetails( id ) );
         return () => {
             dispatch( cleanUpSelectedShow() );
         }
     }, [id, dispatch ])
    
    return (
        <div className="screen">
            <h1>TvShow Screen</h1>
            <code>
                {
                JSON.stringify( selectedTvShow )
                }
            </code>
        </div>
    )
}
