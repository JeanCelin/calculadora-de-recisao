import { faixasINSS } from "../faixaINSS";

export function calcularAliquotaINSS(salario: number) {
  const teto = 8157.41
  
  if(salario >= teto) {
    salario = teto
  }
  const faixa = faixasINSS.find(f =>
    salario >= f.min && salario <= f.max
  );

  if (!faixa) {
    throw new Error("Salário fora das faixas definidas");
  }
  const aliquota = faixa.aliquota
  const deduzir = faixa.deduzir

  console.log(`Alíquota INSS ${faixa.aliquota}`)

  return {aliquota, deduzir}
}
