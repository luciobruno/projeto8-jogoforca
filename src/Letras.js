export default function Letras({ habilitarButton, setHabilitarButton, setError, error }) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function desativar(e) {
        setHabilitarButton(true);
    }

    function Letra(props) {

        const letra = props.toUpperCase();

        return (
            <button disabled={habilitarButton} onClick={desativar} key={letra}>{letra}</button>
        );

    }

    return (
        <div className="letras">
            {alfabeto.map(letra => Letra(letra))}
        </div>
    );
}
