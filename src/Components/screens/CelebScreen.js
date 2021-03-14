import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUpSelectedCeleb, startfetchCelebDetails } from '../../actions/celebs';

export const CelebScreen = () => {
    
    const { id } = useParams();
    const { goBack } = useHistory();
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
             {
                (selectedCelebrity) &&

                <div className="detail-screen">
                    <h1 className="detail-screen__title">{ selectedCelebrity.name }</h1>
                    <span className="detail-screen__tagline">Field of expertise: { selectedCelebrity.known_for_department }</span>
                    
                    <figure className="detail-screen__poster">
                        <img src={ selectedCelebrity.profile_path } alt={ selectedCelebrity.name }/>
                    </figure>
                    <span className="detail-screen__genres">Birthday: { selectedCelebrity.birthday }</span>
                    <span className="detail-screen__genres">Place of birth: {selectedCelebrity.place_of_birth}</span>
                    <p className="detail-screen__description">{ selectedCelebrity.biography }</p>
                    {
                        (selectedCelebrity.homepage) &&
                        <a className="detail-screen__call-to-action" href={selectedCelebrity.homepage} target="_blank" rel="noreferrer">Home Page <i className="fas fa-external-link-alt"></i> </a>
                    }
                    <button className="detail-screen__btn" onClick={ goBack }> <i className="fas fa-arrow-left"></i> Go Back</button>

                </div>
            }
        </div>
    )
}
