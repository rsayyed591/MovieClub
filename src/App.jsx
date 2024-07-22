import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './assets/search.svg';

const apikey = import.meta.env.VITE_MOVIES_API_KEY;

const API_URL = `https://www.omdbapi.com?apikey=${apikey}`;

function App() {
  const [movies, setMovies] = useState([]);
  
  const[searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title)=>{
    const response = await fetch(`https://www.omdbapi.com?apikey=${apikey}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  const handleKeyDown = (event) =>{
    if(event.key==='Enter')
      searchMovies(searchTerm)
  }
  useEffect(()=>{
    searchMovies('Avengers');
  },[]);

  return (
    <>
      <div className="app">
        
        <h1>MovieClub</h1>

        <div className="search">
          
          <input 
            placeholder="Search for movies" 
            value= {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            onKeyDown={handleKeyDown}
          />
          
          <img 
            src={SearchIcon} 
            alt="Search" 
            onClick={()=>searchMovies(searchTerm)}
          />

        </div>

        {
          movies?.length > 0
            ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard movie = {movie} />
                ))}
              </div>
            ) :
            (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )}     
      </div>
    </>
  )
}

export default App
