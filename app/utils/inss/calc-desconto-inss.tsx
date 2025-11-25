import { calcularAliquotaINSS } from "./calc-aliquota-inss";

export function calcularDescontoINSS(salario: number): number {
  const inss = calcularAliquotaINSS(salario);

  return Number((inss.salario * inss.aliquota - inss.deduzir).toFixed(2));
}
