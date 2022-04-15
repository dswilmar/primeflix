import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header>
            <Link className="logo" to="/">Primeflix</Link>
            <Link className="bookmark" to="/meus-filmes">Meus Filmes</Link>
        </header>
    )
}

export default Header;