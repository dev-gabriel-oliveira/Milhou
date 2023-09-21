import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src='/icon.png' alt="" width={'35rem'} />
                </a>
                <Link to="/about">Sobre</Link>
            </div>
        </nav>
    )
}