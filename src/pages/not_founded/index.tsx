import './style.css';

export default function NotFounded() {
    return(
        <div className="not-founded alert alert-warning" role="alert">
            <h1>404</h1>
            <p>Página não encontrada!</p>
            <a href='/'>
                <strong>Ir para Home</strong>
            </a>
        </div>
    )
}