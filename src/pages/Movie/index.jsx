import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

function Movie() {

    const { id } = useParams();

    useEffect(() => {
        async function loadMovie() {
            
        }

        loadMovie();
    }, []);

    return (
        <div>
            <h1>Movie {id}</h1>
        </div>
    )
}

export default Movie;