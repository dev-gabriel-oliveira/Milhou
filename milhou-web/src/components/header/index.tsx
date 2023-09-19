import './style.css';
import icon from './icon.png';

export default function Header() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={icon} alt="" width={'30rem'} />
                </a>
                <a href="">Sobre</a>
            </div>
        </nav>
    )
}