import { TiposAviso } from "@/app/types/tiposAviso";
import { calcularAliquotaIRRF } from "./calc-aliquota-irrf";

export function calcularDescontoIRRF(
  salario: number,
  decimoTerceiro: number,
  inss: number,
  inssDecimoTerceiro: number,
  tiposAviso?: TiposAviso
): number {
  const totalINSS = inss + inssDecimoTerceiro;

  const baseIRRF = salario + decimoTerceiro - totalINSS;
  const irrf = calcularAliquotaIRRF(baseIRRF);

  return Number((baseIRRF * irrf.aliquota - irrf.deduzir).toFixed(2));
}
