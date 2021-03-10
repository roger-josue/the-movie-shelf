import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { cleanUpSelectedMovie, startfetchMovieDetails } from '../../actions/movies';

export const MovieScreen = () => {

   const { id } = useParams();
   const { selectedMovie } = useSelector(state => state.movies)
   const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startfetchMovieDetails( id ) );
        return () => {
            dispatch( cleanUpSelectedMovie() );
        }
    }, [id, dispatch ])

    return (
        <div className="screen">
            <h1>Movie Screen</h1>

            <code>
                {
                JSON.stringify( selectedMovie )
                }
            </code>

        </div>
    )
}
