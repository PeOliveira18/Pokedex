function BtnDetalhesPokemons({categoria, mudaCategoria}) {
    return (
        <div className="flex gap-7">
            <button className={`btn-card ${categoria === 0 ? 'btn-card-ativo' : ''}`} onClick={() => mudaCategoria(0)}>Sobre</button>
            <button className={`btn-card ${categoria === 1 ? 'btn-card-ativo' : ''}`} onClick={() => mudaCategoria(1)}>Stats base</button>
            <button className={`btn-card ${categoria === 2 ? 'btn-card-ativo' : ''}`} onClick={() => mudaCategoria(2)}>Evolucao</button>
            <button className={`btn-card ${categoria === 3 ? 'btn-card-ativo' : ''}`} onClick={() => mudaCategoria(3)}>Formas Alternativas</button>
        </div>
    );
}

export default BtnDetalhesPokemons;