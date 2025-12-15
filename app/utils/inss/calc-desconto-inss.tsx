import { calcularAliquotaINSS } from "./calc-aliquota-inss";

export function calcularDescontoINSS(verbaTributavel: number,): number {
  // Aqui a verbaTributavel é da somas das verbsa tributaveis (saldo salario, ferias vencidas + 1/3, ferias proporcinais + 1/3, aviso prévio trabalhado(é tempo trabalhado normal, entra no saldo salario), ou o valor do decimo terceiro salario que tem um calculo propri.o
  const inss = calcularAliquotaINSS(verbaTributavel);

  return Number((inss.salario * inss.aliquota - inss.deduzir).toFixed(2));
}
