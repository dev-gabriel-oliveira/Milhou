import { useState } from 'react';
import './style.css';

export default function Calculator() {
    const [showResults, setShowResults] = useState(false); // Verifica se pode mostrar os resultados
    const [colorResults, setColorResults] = useState(''); // Cor dos Resultados
    const [textResults, setTextResults] = useState(''); // Texto dos Resultados

    const [milhas, setMilhas] = useState(0); // Quantas milhas serão compradas
    const [precoMilheiro, setPrecoMilheiro] = useState(0); // Preço por Milheiro
    const [desconto, setDesconto] = useState(0); // Desconto em porcentagem
    const [bonus, setBonus] = useState(0); // Bonus em porcentagem

    const [totalValorSemVantagens, setTotalValorSemVantagens] = useState(0); // Valor sem os Descontos

    const [totalMilhasFinal, setTotalMilhasFinal] = useState(0); // Numero de milhas que o comprador vai receber
    const [totalValorFinal, setTotalValorFinal] = useState(0); // Valor final total a pagar
    const [precoMilheiroFinal, setPrecoMilheiroFinal] = useState(0); // Preço final por Milheiro

    const calcular = () => {
        if (milhas === 0 || precoMilheiro === 0) {
            return alert('Informe as Milhas e o Preço p/ Milheiro!')
        };

        const milhasComBonus = milhas + (milhas * (bonus / 100));
        const valorSemVantagens = precoMilheiro * (milhasComBonus / 1000);
        const valorFinal = precoMilheiro * (1 - desconto / 100) * (milhas / 1000);
        const precoMilheiroFinalCalculado = valorFinal / (milhasComBonus / 1000);

        setTotalMilhasFinal(milhasComBonus);
        setTotalValorSemVantagens(valorSemVantagens);
        setTotalValorFinal(valorFinal);
        setPrecoMilheiroFinal(precoMilheiroFinalCalculado);

        mostrarResultados(precoMilheiroFinalCalculado);
    }

    const mostrarResultados = (precoMilheiroFinalCalculado : number) => {
        setShowResults(true);

        switch (true) {
            case precoMilheiroFinalCalculado <= 15.4:
                // Milheiro próximo de R$ 14,00 (margem de no máximo 10% para cima)
                setColorResults('results card card-body text-bg-success');
                setTextResults('CENÁRIO EXCELENTE (Compre!)');
                return;
            case precoMilheiroFinalCalculado <= 17.5:
                // Milheiro em até R$ 17,50
                setColorResults('results card card-body text-bg-primary');
                setTextResults('CENÁRIO BOM (Ainda vale a pena, compre também caso tenha uma viagem próxima)');
                return;
            case precoMilheiroFinalCalculado <= 35:
                // Milheiro em até R$ 35,00
                setColorResults('results card card-body text-bg-warning');
                setTextResults('CENÁRIO RUIM (Só compre se forem poucas e urgentes)');
                return;
            default:
                // Milheiro acima de R$ 35,00
                setColorResults('results card card-body text-bg-danger');
                setTextResults('CENÁRIO PÉSSIMA (Não compre! Avalie comprar a passagem mesmo, e em última caso compre se precisar de poucas)');
        }
    }

    return(
        <div className='calculator card-glass'>
            <h2>Calculadora de Milhas</h2>

            <form>
                <hr />

                <div className="input-group">
                    <span className="input-group-text">Milhas</span>
                    <input
                        name="Milhas"
                        type="number"
                        className="form-control"
                        placeholder="00"
                        onChange={e => setMilhas(Number(e.target.value))}
                    />
                </div>

                <br />

                <div className="input-group">
                    <span className="input-group-text">R$ / Milheiro</span>
                    <input
                        name="Preço do Milheiro"
                        type="number"
                        className="form-control"
                        placeholder="R$00,00"
                        onChange={e => setPrecoMilheiro(Number(e.target.value))}
                    />
                </div>

                <hr />

                <div className="input-group">
                    <span className="input-group-text">Desconto</span>
                    <input
                        name="Desconto"
                        type="number"
                        className="form-control"
                        placeholder="00"
                        onChange={e => setDesconto(Number(e.target.value))}
                    />
                    <span className="input-group-text">%</span>
                </div>

                <br />

                <div className="input-group">
                    <span className="input-group-text">Bônus</span>
                    <input
                        name="Bônus"
                        type="number"
                        className="form-control"
                        placeholder="00"
                        onChange={e => setBonus(Number(e.target.value))}
                    />
                    <span className="input-group-text">%</span>
                </div>

                <hr />
            </form>

            {showResults === true ? (
                <>
                <div className={colorResults}>
                    {textResults} Cada milheiro sairá por R${precoMilheiroFinal}
                </div>

                <div className={colorResults}>
                    O bônus de {bonus}% lhe garante {totalMilhasFinal} milhas, que custariam R${totalValorSemVantagens}.
                    <br />
                    Porém, com seu desconto de {desconto}% o valor fica por apenas R${totalValorFinal}.
                </div>
                </>
            ) : ('')}

            <button className='calculate-btn' onClick={calcular}>Calcular</button>

        </div>
    )
}