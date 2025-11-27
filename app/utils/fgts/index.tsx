import { useDados } from "@/app/components/data-provider";
import { calcTempoTrabalhado } from "../tempo-trabalhado/calc-tempo-trabalhado";
import CalcFGTS from "./calc-fgts";
import FgtsMulta from "./calc-fgts-multa";
import FgtsDecimoTerceiro from "./calc-fgts-decimo-terceiro";
import FgtsSaldoSalario from "./calc-fgts-saldo-salario";

import { somar } from "../somar";

export default function Fgts(saque: boolean, multa: boolean) {
  const { dataAdmissao, dataDemissao } = useDados();
  const taxaFGTS = 0.08;

  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);
  const fgtsDepositado = CalcFGTS(tempoTrabalhado, taxaFGTS);
  const fgtsSaldoSalario = FgtsSaldoSalario(taxaFGTS);
  const fgtsDecimoTerceiro = FgtsDecimoTerceiro(taxaFGTS);

  let fgtsMulta;
  let fgtsTotalSaque;

  if (multa) {
    fgtsMulta = FgtsMulta(fgtsDepositado, fgtsSaldoSalario, fgtsDecimoTerceiro);
  } else {
    fgtsMulta = Number(0);
  }
  if (saque) {
    fgtsTotalSaque = somar(
      fgtsDepositado,
      fgtsSaldoSalario,
      fgtsDecimoTerceiro,
      fgtsMulta
    );
  } else {
    fgtsTotalSaque = Number(0);
  }

  return {
    fgtsDepositado,
    fgtsSaldoSalario,
    fgtsDecimoTerceiro,
    fgtsMulta,
    fgtsTotalSaque,
  };
}
