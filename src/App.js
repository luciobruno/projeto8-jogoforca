import "./styles/reset.css";
import "./styles/style.css";
import React from "react";
import Letras from "./Letras";
import Jogo from "./Jogo";

export default function App() {

  const [habilitarButton, setHabilitarButton] = React.useState(true);
  const [error, setError] = React.useState(0);
  const [palavraNaTela, setPalavraNaTela] = React.useState("");

  return (
    <>
      <Jogo setHabilitarButton={setHabilitarButton} error={error} setPalavraNaTela={setPalavraNaTela} palavraNaTela={palavraNaTela} />
      <Letras habilitarButton={habilitarButton} setHabilitarButton={setHabilitarButton} setError={setError} error={error} />
    </>
  );
}