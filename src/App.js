import "./styles/reset.css";
import "./styles/style.css";
import React from "react";
import Letras from "./Letras";
import Jogo from "./Jogo";
import Chute from "./Chute";

export default function App() {

  const [habilitarButton, setHabilitarButton] = React.useState(true);
  const [error, setError] = React.useState(0);
  const [habilitado,setHabilitado] = React.useState([]);
  const [palavraSeparada,setPalavraSeparada] = React.useState([]);
  const [underlines,setUnderlines] = React.useState([]);
  const [vitoriaOuDerrota,setVitoriaOuDerrota] = React.useState("");
  const [valor, setValor] = React.useState('');

  return (
    <>
      <Jogo setVitoriaOuDerrota={setVitoriaOuDerrota} vitoriaOuDerrota={vitoriaOuDerrota} setHabilitarButton={setHabilitarButton} error={error} setError={setError} setHabilitado={setHabilitado} palavraSeparada={palavraSeparada} setPalavraSeparada={setPalavraSeparada} underlines={underlines} setUnderlines={setUnderlines}/>
      <Letras setVitoriaOuDerrota={setVitoriaOuDerrota} habilitarButton={habilitarButton} setHabilitarButton={setHabilitarButton} setError={setError} error={error} habilitado={habilitado} setHabilitado={setHabilitado} palavraSeparada={palavraSeparada} setUnderlines={setUnderlines} underlines={underlines}/>
      <Chute setHabilitarButton={setHabilitarButton} setError={setError} setUnderlines={setUnderlines} setVitoriaOuDerrota={setVitoriaOuDerrota} palavraSeparada={palavraSeparada} valor={valor} setValor={setValor} habilitarButton={habilitarButton}/>
    </>
  );
}