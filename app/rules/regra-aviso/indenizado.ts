
import { Dados } from "@/app/types/dados";
import { calcTempoTrabalhado } from "@/app/utils/tempo-trabalhado/calc-tempo-trabalhado";

export function avisoIndenizado(dados: Dados): number {
  const { salario, dataAdmissao, dataDemissao } = dados;
  const {dias, meses, anos} = calcTempoTrabalhado(dataAdmissao, dataDemissao);
  
  // Regra: 30 dias de aviso + 3 dias por ano trabalhado, até no máximo 90
  const diasAviso = Math.min(30 + 3 * Math.max(0, anos), 90);

  // Se trabalhou menos de 30 dias, não tem aviso prévio
  if (dias < 30 && meses === 0 && anos === 0) return 0;

  // Valor proporcional ao número de dias de aviso
  const valorAviso = (salario / 30) * diasAviso;

  return Number(valorAviso.toFixed(2));
}

/* Aviso Prévio Indenizado

O empregado não trabalha o aviso.
A empresa paga o valor como indenização na rescisão.

Valor = salário + integrais proporcionais

Período do aviso conta para o tempo de serviço (impacta 13º e férias proporcionais). 

AVISO PRÉVIO INDENIZADO
✔ Impacta:

13º proporcional
O período do aviso indenizado é considerado como tempo trabalhado.
Isso pode gerar +1 mês no cálculo.

Férias proporcionais
Mesmo efeito: o aviso indenizado projeta o contrato para frente.

FGTS

Depósito de 8% sobre o valor da indenização do aviso.

Isso aumenta o saldo → aumenta a multa de 40%.

Multa de 40% do FGTS
A multa incide também sobre o FGTS depositado sobre o aviso indenizado.

Projeção da data de saída
A data final do contrato é empurrada para frente.
Isso é crucial para:

completar mês cheio de férias/13º

evitar ou gerar abatimentos de mês incompleto

determinar se completou novo período aquisitivo

❌ Não impacta:

Não há salário no período do aviso, porque não foi trabalhado.
*/

/* Aviso Prévio Não Cumprido

O empregado pede demissão e não quer cumprir o aviso.
A empresa pode:

Descontar o valor equivalente ao aviso na rescisão.

Valor descontado = salário do período do aviso.

Esse aqui é o famoso: “o funcionário some e o RH chora no Excel”. */

/* Aviso Prévio Dispensado Pelo Empregador (Informação criada por mim)

Quando o trabalhador foi avisado para trabalhar, mas a empresa decide dispensar o cumprimento.

O empregado vai embora sem cumprir.

A empresa não desconta e não precisa pagar como indenizado.
(Essa variação costuma aparecer mais na prática de RH do que na CLT seca.)*/

