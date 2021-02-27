import noImagePlaceholder from '../assets/no_image.png';


const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey= 'd8532795110a063abc81c58c1a79d440';
const imgw300BaseUrl = 'https://image.tmdb.org/t/p/w300';
// const imgw500BaseUrl = 'https://image.tmdb.org/t/p/w500';



            // ==========Movies==========//
export const getPopularMovies = async() => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/popular?api_key=${ apiKey }&language=en-US&page=1`);
        
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
        
    } catch (error) {
        throw error;
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
export const getPopularOnTv = async() => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }tv/popular?api_key=${ apiKey }&language=en-US&page=1`);
        
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


            // ==========Celebrities==========//
export const getPopularCelebs = async() => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }person/popular?api_key=${ apiKey }&language=en-US&page=1`);
        
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
// https://api.themoviedb.org/3/person/1245?api_key=d8532795110a063abc81c58c1a79d440&language=en-US