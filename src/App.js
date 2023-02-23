import "./styles/reset.css";
import "./styles/style.css";
import React from "react";
import Letras from "./Letras";
import Jogo from "./Jogo";

export default function App() {

  const [habilitarButton,setHabilitarButton] = React.useState(true);

  return (
    <>
      <Jogo setHabilitarButton={setHabilitarButton}/>
      <Letras habilitarButton={habilitarButton}/>
    </>
  );
}