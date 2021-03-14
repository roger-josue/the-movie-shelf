import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { cleanUpSelectedShow, startfetchShowDetails } from '../../actions/tv';

export const TvShowScreen = () => {

    const { id } = useParams();
    const { goBack } = useHistory();
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
            {
                (selectedTvShow) &&

                <div className="detail-screen">
                    <h1 className="detail-screen__title">{ selectedTvShow.name }</h1>
                    {
                        (selectedTvShow.tagline) &&
                        <span className="detail-screen__tagline">"{ selectedTvShow.tagline }"</span>
                    }
                    <figure className="detail-screen__poster">
                        <img src={ selectedTvShow.poster_path } alt={ selectedTvShow.name }/>
                    </figure>
                    <p className="detail-screen__description">{ selectedTvShow.overview }</p>
                    <div className="detail-screen__genres">
                        {
                            selectedTvShow.genres.map( genre => (
                                <span key={ genre.id } className="detail-screen__genres__item">{ genre.name}</span>
                                )
                                )
                            }
                    </div>
                    {
                        (selectedTvShow.homepage) &&
                        <a className="detail-screen__call-to-action" href={selectedTvShow.homepage} target="_blank" rel="noreferrer">Home Page <i className="fas fa-external-link-alt"></i> </a>
                    }
                    <button className="detail-screen__btn" onClick={ goBack }> <i className="fas fa-arrow-left"></i> Go Back</button>

                </div>
            }
        </div>
    )
}
