import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Bookmark() {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const storageMovies = localStorage.getItem('@primeflix');
        setMovies(JSON.parse(storageMovies) || []);
    }, []);

    return(
        <div className="bookmark">
            <h1>Meus Filmes</h1>
            <ul>
                {movies.map((movie) => {
                    return(
                        <li key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                            <h4>{movie.title}</h4>
                            <div>
                                <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Bookmark;