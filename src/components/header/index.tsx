import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src='/icon.png' alt="" width={'35rem'} />
                </Link>
                <Link to="/about">Sobre</Link>
            </div>
        </nav>
    )
}