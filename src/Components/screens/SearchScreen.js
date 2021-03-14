import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { multiSearch } from '../../helpers/theMovieDB'
import { Card } from '../ui/Card';

export const SearchScreen = () => {

    const { query } = useParams();
    const [media, setMedia] = useState(null);

    useEffect(() => {
        multiSearch(query).then( data => {
            console.log(data);
            setMedia( data );
        })
        // return () => {

        // }
    }, [query]);

    return (
        <div className="screen">
            
            <div className="cards">
                {
                    (media) &&
                    (
                        media.map( row => (
                                <Card key={row.id} 
                                      path={`${(row.media_type === 'person') ? '/celebs' : (row.media_type === 'movie') ? '/movies' : '/tvshows'}`} 
                                      id={row.id} 
                                      name={`${(row.media_type === 'movie' ? row.title : row.name )}`} 
                                      thumbnail={`${(row.media_type === 'person' ? row.profile_path : row.poster_path )}`}
                                      overview={ `${(row.media_type === 'person') ? '' : row.overview }`}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}
