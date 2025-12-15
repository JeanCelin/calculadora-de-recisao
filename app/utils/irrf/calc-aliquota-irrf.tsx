import { faixasIRRF } from "../faixaIRRF";

export function calcularAliquotaIRRF(irrfBase: number) {
  // const teto = 4664.69;

  // if (irrfBase >= teto) {
  //   irrfBase = teto;
  // }

  const faixa = faixasIRRF.find((f) => irrfBase >= f.min && irrfBase <= f.max);

  if (!faixa) {
    throw new Error("Salário fora das faixas definidas");
  }
  const aliquota = faixa.aliquota;
  const deduzir = faixa.deduzir;

  return { aliquota, deduzir };
}
