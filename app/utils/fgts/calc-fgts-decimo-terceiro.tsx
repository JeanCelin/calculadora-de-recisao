
import { DecimoTerceiro } from "../decimo-terceiro/calc-decimo-terceiro";

export default function FgtsDecimoTerceiro(taxaFGTS: number) {
  return Number((DecimoTerceiro() * taxaFGTS).toFixed(2)) ;
}
