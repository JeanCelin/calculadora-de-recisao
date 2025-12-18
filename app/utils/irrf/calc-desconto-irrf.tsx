import { calcularAliquotaIRRF } from "./calc-aliquota-irrf";

export function calcularDescontoIRRF(
  verbasTributaveisIRRF: number,
  inss: number,
  quantidadeDependentes: number
): number {

  const descontoDependentes = quantidadeDependentes * 189.59;
  const baseIRRF = verbasTributaveisIRRF - inss - descontoDependentes;
  const irrf = calcularAliquotaIRRF(baseIRRF);

  return Number((baseIRRF * irrf.aliquota - irrf.deduzir).toFixed(2));
}
