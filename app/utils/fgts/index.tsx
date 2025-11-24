import { useDados } from "@/app/components/data-provider";
import { calcTempoTrabalhado } from "../tempo-trabalhado/calc-tempo-trabalhado";
import CalcFGTS from "./calc-fgts";
import FgtsMulta from "./calc-fgts-multa";
import FgtsDecimoTerceiro from "./calc-fgts-decimo-terceiro";
import FgtsSaldoSalario from "./calc-fgts-saldo-salario";

import { somar } from "../somar";

export default function Fgts() {
  const { dataAdmissao, dataDemissao } = useDados();
  const taxaFGTS = 0.08;

  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);
  const fgtsDepositado = CalcFGTS(tempoTrabalhado, taxaFGTS);
  const fgtsSaldoSalario = FgtsSaldoSalario(taxaFGTS);
  const fgtsDecimoTerceiro = FgtsDecimoTerceiro(taxaFGTS);
  const fgtsMulta = FgtsMulta(
    fgtsDepositado,
    fgtsSaldoSalario,
    fgtsDecimoTerceiro
  );
  const fgtsTotalSaque = somar(
    fgtsDepositado,
    fgtsSaldoSalario,
    fgtsDecimoTerceiro,
    fgtsMulta
  );

  return {
    fgtsDepositado,
    fgtsSaldoSalario,
    fgtsDecimoTerceiro,
    fgtsMulta,
    fgtsTotalSaque,
  };
}
