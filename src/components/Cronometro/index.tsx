import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolho um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Comecar</Botao>
    </div>
  );
}
