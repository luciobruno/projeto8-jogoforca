export default function Chute({setHabilitarButton,setError,setUnderlines,setVitoriaOuDerrota,palavraSeparada,habilitarButton,valor,setValor}){

    const handleChange = (event) => {
        setValor(event.target.value);
        };
        
    const palavraChutada = valor.split('');
    
    function chute(){

        if(compareArrays() === true){
            setUnderlines(palavraSeparada);
            setVitoriaOuDerrota("ganhou");
            setHabilitarButton(true);
        }else{
            setUnderlines(palavraSeparada);
            setVitoriaOuDerrota("perdeu");
            setHabilitarButton(true);
            setError(6);
        }
    }

    function compareArrays() {
        return palavraSeparada.every((value, index) => value === palavraChutada[index]);
    }

    return(
        <div className="chute">
            <div>Já sei a palavra!</div>
            <input data-test="guess-input" disabled={habilitarButton} onChange={handleChange} className="input"></input>
            <button data-test="guess-button" onClick={chute} className="chutar">Chutar</button>
        </div>
    )
}