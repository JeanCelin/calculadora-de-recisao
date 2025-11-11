import { calcTempoTrabalhado } from "./calcTempoTrabalhado";
import { avisoPrevio } from "./calcAvisoPrevio";
import { feriasProporcionais } from "./calcFeriasProporcinais";
import { feriasVencidas } from "./calcFeriasVencidas";
import { saldoSalario } from "./calcSaldoSalario";
import { decimoTerceiro } from "./calcDecimoTerceiro";
import TiposDeDemissao from "./tipoDeDemissao";

// O CalcRecisorio esta recebendo os valores de Page (Mais pra frente do input)

export default function CalcRecisorio(
  dataAdmissao: string,
  dataDemissao: string,
  salario: number,
  faltas: number,
  pedidoDemissao: string
) {
// Calcular o tempo total Trabalhado em ano meses e dias
  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);

  // Pega o tipo de pedido de demissao, e retorna quais funções de calculo serão chamadas
  const dadosDemissao = TiposDeDemissao(pedidoDemissao);

  // O aviso prévio virá de um input dedicado
  const avisoPrevioVar = true;


  /* -------------------------------------------------------------------------------------------------------------------------------------- */

// Chama das funções de acordo com o dadosDemissao, que recebe os booleans de TipoDeDemissao
  if (!dadosDemissao) {
    throw new Error("Erro na busca dos dados da demissão");
  }
  if (dadosDemissao.saldoSalario === true) {
    console.log(
      `Saldo salário = R$ ${saldoSalario(salario, dataDemissao, faltas)}`
    );
  }
  if (dadosDemissao.decimoTerceiro === true) {
    console.log(
      `Décimo Terceiro = R$ ${decimoTerceiro(
        salario,
        dataAdmissao,
        dataDemissao
      )}`
    );
  }
  if (dadosDemissao.feriasVencidas)
    return console.log(`Ferias Vencidas R$ = ${feriasVencidas(salario)}`);
  if (dadosDemissao.feriasProporcionais)
    return console.log(
      `Ferias Proporcionais R$ = ${feriasProporcionais(
        salario,
        tempoTrabalhado
      )}`
    );
  if (avisoPrevioVar)
    return console.log(
      `Aviso prévio R$ = ${avisoPrevio(salario, tempoTrabalhado)}`
    );















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
