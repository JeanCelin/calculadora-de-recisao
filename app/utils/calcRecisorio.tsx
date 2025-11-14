import { calcTempoTrabalhado } from "./calcTempoTrabalhado";
import calcCondicional from "./calcCondicional";
import TiposDeDemissao from "./tipoDeDemissao";
import { AvisoPrevio } from "../types/avisoPrevio";
import { TipoDemissao } from "../types/tiposDemissao";
// O CalcRecisorio esta recebendo os valores de Page (Mais pra frente do input)

export default function CalcRecisorio(
  dataAdmissao: string,
  dataDemissao: string,
  salario: number,
  faltas: number,
  periodos: number,
) {
  // Calcular o tempo total Trabalhado em ano meses e dias
  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);
  const recisao = TiposDeDemissao(TipoDemissao.pedido);

  const aviso: AvisoPrevio = {
    IndenizadoPeloEmpregador: false,
    Trabalhado: false,
    NaoCumpridoPeloEmpregado: false,
    Dispensado: false,
  };

  calcCondicional(
    recisao,
    salario,
    dataAdmissao,
    dataDemissao,
    faltas,
    tempoTrabalhado,
    periodos,
    aviso
  );

}
