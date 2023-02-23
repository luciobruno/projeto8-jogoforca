import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png"; 
import forca6 from "./assets/forca6.png";

export default function Jogo({setHabilitarButton}) {

    const forcas = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];

    return (
        <div className="jogo">
            <img src={forcas[0]} alt={forcas[0]}  />
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