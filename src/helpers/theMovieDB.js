
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey= 'd8532795110a063abc81c58c1a79d440';

export const getPopularMovies = async() => {
    
    try {
        
        const resp = await fetch(`${ baseUrl }movie/popular?api_key=${ apiKey }&language=en-US&page=1`);
        
        if(resp.ok){
            const popularResponse = await resp.json();
            const { results } = popularResponse;
            
            return results;
        } 
        
    } catch (error) {
        throw error;
    }
    
}