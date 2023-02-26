import "./styles/reset.css";
import "./styles/style.css";
import React from "react";
import Letras from "./Letras";
import Jogo from "./Jogo";

export default function App() {

  const [habilitarButton, setHabilitarButton] = React.useState(true);
  const [error, setError] = React.useState(0);
  const [palavraNaTela, setPalavraNaTela] = React.useState("");
  const [habilitado,setHabilitado] = React.useState([]);
  const [palavraSeparada,setPalavraSeparada] = React.useState([]);
  const [underlines,setUnderlines] = React.useState([]);

  return (
    <>
      <Jogo setHabilitarButton={setHabilitarButton} error={error} setPalavraNaTela={setPalavraNaTela} palavraNaTela={palavraNaTela} palavraSeparada={palavraSeparada} setPalavraSeparada={setPalavraSeparada} underlines={underlines} setUnderlines={setUnderlines}/>
      <Letras habilitarButton={habilitarButton} setHabilitarButton={setHabilitarButton} setError={setError} error={error} habilitado={habilitado} setHabilitado={setHabilitado} palavraSeparada={palavraSeparada} setUnderlines={setUnderlines} underlines={underlines}/>
    </>
  );
}