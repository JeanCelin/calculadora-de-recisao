import { decimoTerceiro } from "../decimo-terceiro/calc-decimo-terceiro";
import { saldoSalario } from "../saldo-salario/calc-saldo-salario";

type TempoTrabalhado = {
  anos: number;
  meses: number;
  dias: number;
};

export default function CalcFGTS(
  salario: number,
  tempoTrabalhado: TempoTrabalhado,
  dataAdmissao: string,
  dataDemissao: string,
  fgtsSaque: boolean,
  fgtsCalc: boolean,
  fgtsMulta: boolean
) {
  const { anos, meses } = tempoTrabalhado;
  const taxaFGTS = 0.08;
  let totalSaque;

  let mesesTotais: number = meses;

  if (anos >= 1) {
    mesesTotais += anos * 12;
  }

  //Empregador deve depositar 8% do salario bruto todo mes para o FGTS
  const fgtsBase = salario * taxaFGTS * mesesTotais;
  const fgtsTaxaMulta = 0.4;

  //FGTS sobre os dias trabalhados no mês da demissão

  const fgtsSaldoSalario: number =
    Number(saldoSalario(salario, dataDemissao)) * taxaFGTS;
  const fgtsDecimoTerceiro: number =
    Number(decimoTerceiro(salario, dataAdmissao, dataDemissao)) * taxaFGTS;
  const multa: number = fgtsMulta
    ? (fgtsBase + fgtsSaldoSalario + fgtsDecimoTerceiro) * fgtsTaxaMulta
    : 0;

  if (fgtsSaque) {
    totalSaque = fgtsBase + fgtsSaldoSalario + fgtsDecimoTerceiro + multa;
  } else {
    totalSaque = 0;
  }

  return { fgtsBase, fgtsSaldoSalario, fgtsDecimoTerceiro, multa, totalSaque };
}
