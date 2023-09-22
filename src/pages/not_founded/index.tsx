import { Link } from 'react-router-dom';
import './style.css';

export default function NotFounded() {
    return(
        <div className="not-founded card-glass" role="alert">
            <h1>404</h1>
            <p>Página não encontrada!</p>
            <Link to='/'>
                <strong>Ir para Home</strong>
            </Link>
        </div>
    )
}