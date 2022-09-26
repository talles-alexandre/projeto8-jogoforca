import forca0 from "./assets/forca0.png";

import alfabeto from "./alfabeto";
import { useState } from "react";

export default function App() {
  const [habilitado, setHabilitado] = useState(false);
  const [erros, setErros] = useState(0);
  return (
    <>
      <div className="top">
        <div className="telaJogo">
          <img data-identifier="game-image" src={forca0}></img>
        </div>
        <div className="lado_direito">
          <div className="escolherPalavra">
            <button
              data-identifier="choose-word"
              onClick={() => setHabilitado(true)}
            >
              Escolher Palavras
            </button>
          </div>

          <div className="word" data-identifier="word">
            <span>_ _ _ _ _ _ </span>
          </div>
        </div>
      </div>

      <div className="alfabeto">
        <ul className="letras">
          {alfabeto.map((l, index) => (
            <button
              data-identifier="letter"
              className={habilitado == true ? "habilitado" : "desabilitado"}
              onClick={() => {}}
            >
              {l}
            </button>
          ))}
        </ul>
      </div>

      <div className="footer">
        <span> Já sei a palavra!</span>
        {habilitado == true ? <input></input> : <input disabled></input>}
        <button data-identifier="guess-button">Chutar</button>
      </div>
    </>
  );
}
