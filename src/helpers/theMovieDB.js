import noImagePlaceholder from '../assets/no_image.png';


const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey= 'd8532795110a063abc81c58c1a79d440';
const imgw300BaseUrl = 'https://image.tmdb.org/t/p/w300';
// const imgw500BaseUrl = 'https://image.tmdb.org/t/p/w500';



            // ==========Movies==========//
export const getPopularMovies = async( page = 1 ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/popular?api_key=${ apiKey }&language=en-US&page=${page}`);
        
        if(resp.status === 422){
            throw new SyntaxError('There is no more pages to navigate');
        }

        if(resp.ok){
            const popularResponse = await resp.json();
            const { results } = popularResponse;
            
             results.map( movie => {
                if( movie.backdrop_path){
                    movie.backdrop_path = `${ imgw300BaseUrl}${movie.backdrop_path}`;
                }else{
                    movie.backdrop_path = `${ noImagePlaceholder }`;
                }

                if( movie.poster_path){
                    movie.poster_path = `${ imgw300BaseUrl}${movie.poster_path}`;
                }else{
                    movie.poster_path = `${ noImagePlaceholder }`;
                }

                return movie
            });

            return results;
        } 
        
    } catch (err) {
        // throw err;
        console.log(err);
    }
    
}

// GET MOVIE DETAILS
export const getMovieDetails = async( id ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/${ id }?api_key=${ apiKey }&language=en-US`);

        if(resp.ok){
            const movie = await resp.json();

            if( movie.backdrop_path){
                movie.backdrop_path = `${ imgw300BaseUrl}${movie.backdrop_path}`;
            }else{
                movie.backdrop_path = `${ noImagePlaceholder }`;
            }

            if( movie.poster_path){
                movie.poster_path = `${ imgw300BaseUrl}${movie.poster_path}`;
            }else{
                movie.poster_path = `${ noImagePlaceholder }`;
            }

            return movie;
         
        } 
        
    } catch (err) {
        throw err;
        // console.log(err);
    }
    
}



export const getOnTheatersMovies = async() => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/now_playing?api_key=${ apiKey }&language=en-US&page=1`);
        
        if(resp.ok){
            const onTheatersResponse = await resp.json();
            const { results } = onTheatersResponse;
            
             results.map( movie => {
                if( movie.backdrop_path){
                    movie.backdrop_path = `${ imgw300BaseUrl}${movie.backdrop_path}`;
                }else{
                    movie.backdrop_path = `${ noImagePlaceholder }`;
                }

                if( movie.poster_path){
                    movie.poster_path = `${ imgw300BaseUrl}${movie.poster_path}`;
                }else{
                    movie.poster_path = `${ noImagePlaceholder }`;
                }

                return movie
            });

            return results;
        } 
        
    } catch (error) {
        throw error;
    }
    
}

            // ==========TV Shows==========//
export const getPopularOnTv = async( page = 1) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }tv/popular?api_key=${ apiKey }&language=en-US&page=${page}`);

        if(resp.status === 422){
            throw new SyntaxError('There is no more pages to navigate');
        }
        
        if(resp.ok){
            const popularResponse = await resp.json();
            const { results } = popularResponse;
            
            results.map( show => {
                if( show.backdrop_path){
                    show.backdrop_path = `${ imgw300BaseUrl}${show.backdrop_path}`;
                }else{
                    show.backdrop_path = `${ noImagePlaceholder }`;
                }

                if( show.poster_path){
                    show.poster_path = `${ imgw300BaseUrl}${show.poster_path}`;
                }else{
                    show.poster_path = `${ noImagePlaceholder }`;
                }

                return show
            });
            
            return results;
        } 
        
    } catch (error) {
        throw error;
    }

}

export const getTvShowDetails = async( id ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }tv/${ id }?api_key=${ apiKey }&language=en-US`);

        if(resp.ok){
            const movie = await resp.json();

            if( movie.backdrop_path){
                movie.backdrop_path = `${ imgw300BaseUrl}${movie.backdrop_path}`;
            }else{
                movie.backdrop_path = `${ noImagePlaceholder }`;
            }

            if( movie.poster_path){
                movie.poster_path = `${ imgw300BaseUrl}${movie.poster_path}`;
            }else{
                movie.poster_path = `${ noImagePlaceholder }`;
            }

            return movie;
         
        } 
        
    } catch (err) {
        throw err;
        // console.log(err);
    }
    
}


            // ==========Celebrities==========//
export const getPopularCelebs = async( page = 1 ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }person/popular?api_key=${ apiKey }&language=en-US&page=${ page }`);

        if(resp.status === 422){
            throw new SyntaxError('There is no more pages to navigate');
        }
        
        if(resp.ok){
            const popularResponse = await resp.json();
            const { results } = popularResponse;
            
            results.map( celeb => {
                if( celeb.profile_path){
                    celeb.profile_path = `${ imgw300BaseUrl}${celeb.profile_path}`;
                }else{
                    celeb.profile_path = `${ noImagePlaceholder }`;
                }
                
                return celeb
            });
            
            return results;
        } 
        
    } catch (error) {
        throw error;
    }

}

// Get celeb details
export const getCelebDetails = async( id ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }person/${ id }?api_key=${ apiKey }&language=en-US`);

        if(resp.ok){
            const celeb = await resp.json();

            if( celeb.profile_path){
                celeb.profile_path = `${ imgw300BaseUrl}${celeb.profile_path}`;
            }else{
                celeb.profile_path = `${ noImagePlaceholder }`;
            }

            return celeb;
         
        } 
        
    } catch (err) {
        throw err;
    }
    
}


            // ==========Multi Search==========//
// https://api.themoviedb.org/3/search/multi?api_key=d8532795110a063abc81c58c1a79d440&language=en-US&query=avengers&page=1&include_adult=false
export const multiSearch = async( query, page = 1 ) => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }search/multi?api_key=${ apiKey }&language=en-US&query=${query}&page=${page}&include_adult=false`);
        
        if(resp.ok){
            const response = await resp.json();
            const { results } = response;
            
            results.map( media => {

                if(media.media_type === 'movie' || media.media_type === 'tv'){

                    if( media.backdrop_path){
                        media.backdrop_path = `${ imgw300BaseUrl}${media.backdrop_path}`;
                    }else{
                        media.backdrop_path = `${ noImagePlaceholder }`;
                    }
    
                    if( media.poster_path){
                        media.poster_path = `${ imgw300BaseUrl}${media.poster_path}`;
                    }else{
                        media.poster_path = `${ noImagePlaceholder }`;
                    }

                }
                
                if(media.media_type === 'person'){
                    if( media.profile_path){
                        media.profile_path = `${ imgw300BaseUrl}${media.profile_path}`;
                    }else{
                        media.profile_path = `${ noImagePlaceholder }`;
                    }
                }


                return media
            });
            
            return results;
        } 
        
    } catch (error) {
        throw error;
    }

}