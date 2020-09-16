import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Animations Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="TV Animations" fetchUrl={requests.fetchAnimationTv} />
      <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Sci-fi Movies" fetchUrl={requests.fetchScienceFictionMovies} />
    </div>
  );
}

export default App;
