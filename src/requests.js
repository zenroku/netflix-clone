const APIKEY = "fd1d23e2ed532046d2e373cb46e9fef0"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&languange=id`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&languange=id`,
    fetchAnimationMovies: `/discover/movie?api_key=${APIKEY}&with_genres=16`,
    fetchAnimationTv: `/discover/tv?api_key=${APIKEY}&with_genres=16`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchHistoryMovies: `/discover/movie?api_key=${APIKEY}&with_genres=36`,
    fetchCrimeMovies: `/discover/movie?api_key=${APIKEY}&with_genres=80`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
}

export default requests