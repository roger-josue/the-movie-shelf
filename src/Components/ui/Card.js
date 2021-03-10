import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export const Card = ( { path ,id, name, thumbnail, overview, cardBig=false} ) => {

    const history = useHistory();
    const handleNavigation = () => {
        history.push(`${path}/${id}`)
    }

    return (
        <figure className={`card fadeIn ${ (cardBig) ? 'card--big' : '' }`}>
            <img 
                className="card__image" 
                src={thumbnail} 
                alt={name}
                onClick={ handleNavigation }/>
            <figcaption className="card__body">
                <h3 className="card__body__title">{name}</h3>
                {
                    (overview) &&
                    <p className="card__body__desc">{`${overview.slice(0,70)}...`}</p>
                }
            </figcaption>
        </figure>
    )
}


Card.propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}