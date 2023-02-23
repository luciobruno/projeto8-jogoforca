import forca0 from "./assets/forca0.png";

export default function Jogo() {
    return (
        <div className="jogo">
            <img src={forca0} alt={forca0} />
            <div className="botao-palavra">
                <button>Escolher Palavra</button>
                <div className="palavra">
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                </div>
            </div>
        </div>
    );
}