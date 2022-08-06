const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_IMDB_BASE_URL;

console.log(API_KEY);


const requests = {
    requestPopular : `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-IN&page=1`,
    requestTopRated : `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-IN&page=1`,
    requestTrending : `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-IN&page=2`,
    requestAdult : `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10749,18&cCountry=IN|US&cCertificate=A|R&iclude_adult=true`,
    requestUpcoming : `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-IN&page=1`,
}

export default requests