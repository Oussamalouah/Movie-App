
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard'

import './App.css';
import SearchIcon from './searchIcon.png';

const API_URL ='http://www.omdbapi.com?apikey=d9b2dac3'
const App = () =>{
            
  const [movies, setMovies] = useState([]);
  const [searchhamid,setsearchhamid] = useState([])
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() =>{
        searchMovies('Spiderman');
    },[]);
    return (
        <div className ="app">
           <h1>Oussama's Movies</h1>
           <div className="search">
           <input
           placehodler ="Search for movies"
           value={searchhamid}
           onChange={(e) => setsearchhamid(e.target.value)}/>
           <img
             src={SearchIcon}
             alt="SearchIcon"
             onClick={()=> searchMovies(searchhamid)}/>
           </div>
           
           {
            movies?.length > 0
             ? (
                <div className="container">
               {movies.map((movie)=>(
                <MovieCard movie = {movie}/>
               ))}
                </div>
               ): (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                      </div>  
               )
           }
        </div>
        
    );
}


export default  App;