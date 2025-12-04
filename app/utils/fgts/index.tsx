import { calcTempoTrabalhado } from "../tempo-trabalhado/calc-tempo-trabalhado";
import { calcFGTS } from "./calc-fgts";
import { calcFgtsMulta } from "./calc-fgts-multa";
import { calcFgtsDecimoTerceiro } from "./calc-fgts-decimo-terceiro";
import { calcFgtsSaldoSalario } from "./calc-fgts-saldo-salario";

import { somar } from "../somar";
import { Dados } from "@/app/types/dados";

export function fgts(saque: boolean, multa: boolean, dados: Dados) {
  const { dataAdmissao, dataDemissao, salario } = dados;
  const taxaFGTS = 0.08;

  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);
  const fgtsDepositado = calcFGTS(tempoTrabalhado, taxaFGTS, salario);
  const fgtsSaldoSalario = calcFgtsSaldoSalario(
    taxaFGTS,
    salario,
    dataDemissao
  );
  const fgtsDecimoTerceiro = calcFgtsDecimoTerceiro(taxaFGTS, dados);

  let fgtsMulta;
  let fgtsTotalSaque;

  if (multa) {
    fgtsMulta = calcFgtsMulta(
      fgtsDepositado,
      fgtsSaldoSalario,
      fgtsDecimoTerceiro
    );
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
