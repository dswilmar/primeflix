import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';

function Bookmark() {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const storageMovies = localStorage.getItem('@primeflix');
        setMovies(JSON.parse(storageMovies) || []);
    }, []);

    function removeMovie(movieId) {
        let filter = movies.filter((item) => {
            return (item.id !== movieId)
        });

        setMovies(filter);
        localStorage.setItem('@primeflix', JSON.stringify(filter));
        toast.success('Filme removido da sua lista.');
    }

    return(
        <div className="bookmark">
            <h1>Meus Filmes</h1>
            {movies.length === 0 && <p>Nenhum filme salvo ainda.</p>}
            <ul>
                {movies.map((movie) => {
                    return(
                        <li key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <h4>{movie.title}</h4>
                            <div>
                                <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
                                <button onClick={() => removeMovie(movie.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Bookmark;