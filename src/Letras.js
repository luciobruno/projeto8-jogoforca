export default function Letras({ setVitoriaOuDerrota,habilitarButton, setError, error, setHabilitado, habilitado, palavraSeparada, setUnderlines,underlines, setHabilitarButton }) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function desativar(letra) {
        const listaHabilitados = [...habilitado,letra];
        setHabilitado(listaHabilitados);
        testarLetra(letra);
    }

    function testarLetra(letra){
        let teste = 0;
        let underline = underlines;
        const caractereDaPalavra = letra.toLowerCase();
        for(let i=0;i<palavraSeparada.length;i++){
            let caractere = palavraSeparada[i];
            if(caractere === caractereDaPalavra){
                teste +=1;
                underline[i] = caractere;
                setUnderlines(underline);
            }  
        }
        if(teste===0){
            const errada = error;
            setError(errada+1);
            if(error===5){
                setUnderlines(palavraSeparada);
                setVitoriaOuDerrota("perdeu");
                setHabilitarButton(true);
        }
    }
    if(compareArrays()===true){
        setVitoriaOuDerrota("ganhou");
        setHabilitarButton(true);
    }

    }

    function compareArrays() {
        return palavraSeparada.every((value, index) => value === underlines[index]);
    }


    function Letra(props) {

        const letra = props.toUpperCase();

        return (
            <button data-test="letter" disabled={habilitarButton || habilitado.includes(letra)} onClick={() => desativar(letra)} key={letra}>{letra}</button>
        );

    }

    return (
        <div className="letras">
            {alfabeto.map(letra => Letra(letra))}
        </div>
    );
}
