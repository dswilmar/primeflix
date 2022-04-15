import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

function Movie() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: 'pt-br'
                }
            }).then((response) => {
                setMovie(response.data);
                setIsLoading(false);
            }).catch(() => {
                navigate('/', {replace: true});
                return;
            })
        }

        loadMovie();

        return () => {console.log('Componente desmontado')}
    }, [id, navigate]);

    function saveMovie() {
        const storageMovies = localStorage.getItem('@primeflix');
        let moviesList = JSON.parse(storageMovies) || [];
        const hasMovie = moviesList.some((item) => item.id === movie.id);
        if (hasMovie) {
            alert('Este filme já está na sua lista');
            return;
        }
        moviesList.push(movie);
        localStorage.setItem('@primeflix', JSON.stringify(moviesList));
        alert('Filme salvo com sucesso');
    }

    if (isLoading) {
        return(
            <div className="loading">
                <h2>Carregando...</h2>
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
            <strong>Avaliação: {movie.vote_average}/10</strong>

            <div className="actions">
                <button onClick={saveMovie}>Salvar</button>                
            </div>
        </div>
    )
}

export default Movie;