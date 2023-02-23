export default function Letras({habilitarButton}) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function Letra (props){

        const letra = props.toUpperCase();
    
        return(
            <button disabled={habilitarButton} key={letra}>{letra}</button>
        );
    
    }

    return (
        <div className="letras">
            {alfabeto.map(letra => Letra(letra))}
        </div>
    );
}
