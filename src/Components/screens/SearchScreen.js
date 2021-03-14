import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { startfetchSearch } from '../../actions/search';
import { Card } from '../ui/Card';

export const SearchScreen = () => {

    const { query } = useParams();
    const { searchResult } = useSelector(state => state.search)
    const dispatch = useDispatch();


    const noResults = <div 
                        style={ 
                            {display: 'flex',
                            width: '100vw',
                            height: '10vh',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0 2rem',
                            textAlign: 'center'}}>
                                <h2>No results for "{query}"</h2>
                      </div>;

    useEffect(() => {
        dispatch( startfetchSearch(query) ); 
    
    }, [query, dispatch]);

    return (
        <div className="screen fadeIn">
            
            <div className="cards">
                {
                    (searchResult.length > 0) ?
                    (
                        searchResult.map( row => (
                                <Card key={row.id} 
                                      path={`${(row.media_type === 'person') ? '/celebs' : (row.media_type === 'movie') ? '/movies' : '/tvshows'}`} 
                                      id={row.id} 
                                      name={`${(row.media_type === 'movie' ? row.title : row.name )}`} 
                                      thumbnail={`${(row.media_type === 'person' ? row.profile_path : row.poster_path )}`}
                                      overview={ `${(row.media_type === 'person') ? '' : row.overview }`}/>
                        ))
                    ) :
                    (
                        noResults
                    )
                }
            </div>
        </div>
    )
}
