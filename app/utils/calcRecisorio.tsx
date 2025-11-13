import { calcTempoTrabalhado } from "./calcTempoTrabalhado";
import { avisoPrevio } from "./calcAvisoPrevio";
import calcCondicional from "./calcCondicional";
import TiposDeDemissao from "./tipoDeDemissao";

// O CalcRecisorio esta recebendo os valores de Page (Mais pra frente do input)


export default function CalcRecisorio(
  dataAdmissao: string,
  dataDemissao: string,
  salario: number,
  faltas: number,
  periodos: number,
  fgtsMulta: boolean
) {
  // Calcular o tempo total Trabalhado em ano meses e dias
  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);
  const recisao = TiposDeDemissao('pedidoPeloFuncionario')
  calcCondicional(recisao, salario, dataAdmissao, dataDemissao, faltas, tempoTrabalhado, periodos, fgtsMulta)

  // Pega o tipo de pedido de demissao, e retorna quais funções de calculo serão chamadas
  // O aviso prévio virá de um input dedicado
  const avisoPrevioVar = true;

  /* -------------------------------------------------------------------------------------------------------------------------------------- */

  // Chama das funções de acordo com o dadosDemissao, que recebe os booleans de TipoDeDemissao


  // if (avisoPrevioVar)
  //   return console.log(
  //     `Aviso prévio R$ = ${avisoPrevio(salario, tempoTrabalhado)}`
  //   );
















  // console.log(
  //   `tempo trabalhado: ${tempoTrabalhado.anos} anos ${tempoTrabalhado.meses} meses ${tempoTrabalhado.dias} dias`
  // );

  // console.log(`aviso prévio: ${avisoPrevio(salario, tempoTrabalhado)}`);
  // console.log(
  //   `ferias proporcionais ${feriasProporcionais(salario, tempoTrabalhado)}`
  // );
  // console.log(`ferias vencidas: ${feriasVencidas(salario, 2)}`);
  // console.log(
  //   `Saldo de Salario ${saldoSalario(salario, dataDemissao, faltas)}`
  // );
  // console.log(
  //   `Décimo terceiro: ${decimoTerceiro(salario, dataAdmissao, dataDemissao)}`
  // );
}
