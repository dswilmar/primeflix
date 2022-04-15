import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

function Home() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get(`movie/now_playing`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: 'pt-br',
                    page: 1
                }
            });
            //console.log(response.data.results.slice(0, 10));
            setMovies(response.data.results.slice(0, 10));
            setIsLoading(false);
        }

        loadMovies();
    }, []);

    if (isLoading) {
        return(
            <div className="loading">
                <h2>Carregando...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="movies-list">
                { movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
                        </article>
                    )
                }) }
            </div>
        </div>
    )
}

export default Home;