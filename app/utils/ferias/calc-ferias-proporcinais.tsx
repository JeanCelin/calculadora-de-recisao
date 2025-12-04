import { calcTempoTrabalhado } from "../tempo-trabalhado/calc-tempo-trabalhado";
import { Dados } from "@/app/types/dados";

/* 
Regras

São férias que ainda estão sendo “acumuladas”.
Todo mês que o trabalhador trabalha, ele acumula 1/12 (um doze avos) de direito a férias. 

Observação importante sobre dias incompletos
Se o trabalhador não completou o mês inteiro, a regra é:
- Se trabalhou mais de 14 dias, conta como 1 mês.
- Se trabalhou menos de 15 dias, não conta.
*/

export function feriasProporcionais(dados: Dados): number {
  const { salario, dataAdmissao, dataDemissao } = dados;

  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);
  const { meses, dias } = tempoTrabalhado;

  //Calculo para arredondar os numero de mes trabalhado
  let mesesServRond = dias > 14 ? meses + 1 : meses;

  // Não existem meses maiores que 12, essa condição evita input errado e "puxa" o numero de meses para 12 caso maior.
  if (mesesServRond > 12) mesesServRond = 12;

  // Calculo da proporção das ferias
  const feriasProporcionais = (salario / 12) * mesesServRond;


  return Number(feriasProporcionais.toFixed(2));
}
