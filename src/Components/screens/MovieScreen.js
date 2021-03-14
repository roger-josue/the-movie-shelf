import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { cleanUpSelectedMovie, startfetchMovieDetails } from '../../actions/movies';

export const MovieScreen = () => {

   const { id } = useParams();
   const { goBack } = useHistory();
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
            {
                (selectedMovie) &&

                <div className="detail-screen">
                    <h1 className="detail-screen__title">{ selectedMovie.title }</h1>
                    {
                        (selectedMovie.tagline) &&
                        <span className="detail-screen__tagline">"{ selectedMovie.tagline }"</span>
                    }
                    <figure className="detail-screen__poster">
                        <img src={ selectedMovie.poster_path } alt={ selectedMovie.title }/>
                    </figure>
                    <p className="detail-screen__description">{ selectedMovie.overview }</p>
                    <div className="detail-screen__genres">
                        {
                            selectedMovie.genres.map( genre => (
                                <span key={ genre.id } className="detail-screen__genres__item">{ genre.name}</span>
                                )
                                )
                            }
                    </div>
                    {
                        (selectedMovie.homepage) &&
                        <a className="detail-screen__call-to-action" href={selectedMovie.homepage} target="_blank" rel="noreferrer">Home Page <i className="fas fa-external-link-alt"></i> </a>
                    }
                    <button className="detail-screen__btn" onClick={ goBack }> <i className="fas fa-arrow-left"></i> Go Back</button>

                </div>
            }
        </div>
    )
}
