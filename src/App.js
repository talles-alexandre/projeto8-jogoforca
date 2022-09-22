import forca0 from "./assets/forca0.png";
import palavras from "./palavras";
import alfabeto from "./alfabeto";

export default function App() {
  return (
    <>
      <div className="top">
        <div className="telaJogo">
          <img src={forca0}></img>
        </div>
        <div className="escolherPalavra">
          <button>Escolher Palavras</button>
        </div>
      </div>

      <div className="footer">
        <span> Já sei a palavra</span>
        <input></input>
        <button>Chutar</button>
      </div>
    </>
  );
}
