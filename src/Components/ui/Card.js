import React from 'react';
import PropTypes from 'prop-types';

export const Card = ( { name, thumbnail, overview, cardBig=false} ) => {
    return (
        <figure className={`card ${ (cardBig) ? 'card--big' : '' }`}>
            <img className="card__image" src={thumbnail} alt={name}/>
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