import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png"; 
import forca6 from "./assets/forca6.png";

export default function Jogo({setVitoriaOuDerrota,vitoriaOuDerrota,setHabilitarButton,error,setError,setPalavraSeparada,underlines,setUnderlines,setHabilitado}) {

    const forcas = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];
    const listaPalavras = palavras;
    let palavra = "";

    function habilitarButton(){
        setHabilitarButton(false);
        setError(0);
        setHabilitado([]);
        setVitoriaOuDerrota("");
        if(palavra === ""){ 
            let random = (min,max) => Math.floor(Math.random()*(max - min) + min);
            palavra = listaPalavras[random(0,listaPalavras.length)];
        }
        const palavraDividida = palavra.split('');
        setPalavraSeparada(palavraDividida);
        const listaUnderlines = [];
        for(let i=0;i<palavraDividida.length;i++){
            listaUnderlines.push('_');
        }
        setUnderlines(listaUnderlines);
    }

    return (
        <div className="jogo">
            <img data-test="game-image" src={forcas[error]} alt={forcas[error]}  />
            <div className="botao-palavra">
                <button data-test="choose-word" onClick={habilitarButton}>Escolher Palavra</button>
                <div data-test="word" className={`palavra ${vitoriaOuDerrota}`} key={forcas[error]}>
                    {underlines.map((letra, index)=> <div key={index}>{letra}</div>)}
                </div>  
            </div>
        </div>
    );
}