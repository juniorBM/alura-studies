import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/time';
import { type ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Cronometro.module.scss';
import Relogio from './Relogio';

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

export default function Cronometro({
  selecionado,
  finalizarTarefa,
}: Props): JSX.Element {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado != null) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0): void {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        regressiva(contador - 1);
        return;
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao
        onClick={() => {
          regressiva(tempo);
        }}
      >
        Comecar
      </Botao>
    </div>
  );
}
