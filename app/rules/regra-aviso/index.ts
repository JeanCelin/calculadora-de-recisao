import { TiposAviso } from "@/app/types/tiposAviso";
import AvisoTrabalhado from "./trabalhado";

export function aviso(tipoAviso: TiposAviso, salario: number, diasAviso: number) {
  if (tipoAviso === "TRABALHADO") AvisoTrabalhado(salario, diasAviso);
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
