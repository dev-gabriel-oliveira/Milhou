import './style.css';

export default function Header() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src='/icon.png' alt="" width={'35rem'} />
                </a>
                <a href="/about">Sobre</a>
            </div>
        </nav>
    )
}