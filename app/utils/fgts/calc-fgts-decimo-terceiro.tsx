
import { Dados } from "@/app/types/dados";
import { decimoTerceiro } from "../decimo-terceiro/calc-decimo-terceiro";

export function calcFgtsDecimoTerceiro(taxaFGTS: number, dados: Dados) {
  return Number((decimoTerceiro(dados) * taxaFGTS).toFixed(2)) ;
}
