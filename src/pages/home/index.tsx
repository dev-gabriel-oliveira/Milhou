import { Link } from 'react-router-dom';
import './style.css';

export default function Home() {
    return(
        <div className='home'>
            <h1>Milhou</h1>

            <h2>Perdido nas Milhas?</h2>
            <p>A gente te ajuda a escolher a melhor opção pra você!</p>

            <br />

            <h3>Vamos Calcular</h3>
            <Link to="/calculator" title='Ir para Calculadora'>
                <button>Clique Aqui</button>
            </Link>
        </div>
    )
}