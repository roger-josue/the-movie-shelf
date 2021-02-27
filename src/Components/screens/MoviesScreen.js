import React from 'react'
import { useSelector } from 'react-redux';

export const MoviesScreen = () => {

    const { popular } = useSelector(state => state.movies);


    return (
        <div className="screen">

            <div className="screen__grid">
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                {/* <figure className="card">
                        <img className="card__image" src={slide.profile_path} alt={slide.name}/>
                        <figcaption className="card__body">
                            <h3 className="card__body__title">{ slide.name}</h3>
                        </figcaption>
                    </figure> */}

            </div>


        </div>
    )
}
