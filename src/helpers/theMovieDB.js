
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey= 'd8532795110a063abc81c58c1a79d440';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'
export const getPopularMovies = async() => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/popular?api_key=${ apiKey }&language=en-US&page=1`);
        
        if(resp.ok){
            const popularResponse = await resp.json();
            const { results } = popularResponse;
            
             results.map( movie => {
                if( movie.backdrop_path){
                    movie.backdrop_path = `${ imgBaseUrl}${movie.backdrop_path}`;
                }
                if( movie.poster_path){
                    movie.poster_path = `${ imgBaseUrl}${movie.poster_path}`;
                }
                return movie
            });

            return results;
        } 
        
    } catch (error) {
        throw error;
    }
    
}