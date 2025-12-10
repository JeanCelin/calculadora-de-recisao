import { decimoTerceiro } from "@/app/utils/decimo-terceiro/calc-decimo-terceiro";
import { feriasProporcionais } from "@/app/utils/ferias/calc-ferias-proporcinais";
import { calcferiasVencidas } from "@/app/utils/ferias/calc-ferias-vencidas";
import { calcUmTercoFerias } from "@/app/utils/ferias/calc-um-terco-ferias";
import { fgts } from "@/app/utils/fgts";
import { saldoSalario } from "@/app/utils/saldo-salario/calc-saldo-salario";
import { Resposta } from "@/app/types/resposta";

import { calcularDescontoINSS } from "@/app/utils/inss/calc-desconto-inss";
import { calcularDescontoIRRF } from "@/app/utils/irrf/calc-desconto-irrf";
import { somar } from "@/app/utils/somar";
import { calcAviso } from "../regra-aviso";
import { Dados } from "@/app/types/dados";

export function semJustaCausa(dados: Dados) {
  const {
    salario,
    dataDemissao,
    faltas,
    feriasVencidasPeriodos,
    aviso,
    demissao,
  } = dados;

  const saldoSalarioReceber = saldoSalario(salario, dataDemissao, faltas);
  /*
    2) Ferias Vencidas + 1/3; */
  const feriasVencidasReceber = feriasVencidasPeriodos
    ? calcferiasVencidas(salario, feriasVencidasPeriodos)
    : 0;
  const feriasVencidasUmTerco = calcUmTercoFerias(feriasVencidasReceber);
  /*
    3) Férias Proporcionais + 1/3; */
  const feriasProporcionaisReceber = feriasProporcionais(dados);
  const feriasPropsUmTerco = calcUmTercoFerias(feriasProporcionaisReceber);
  /*
    4) 13º Salário Proporcional; */
  const decimoTerceiroSalario = decimoTerceiro(dados);

  const valorAviso = calcAviso(dados); //Aviso Previo
  //FGTS
  const {
    fgtsDepositado,
    fgtsSaldoSalario,
    fgtsDecimoTerceiro,
    fgtsMulta,
    fgtsTotalSaque,
  } = fgts(true, true, dados);

  // Verbas Recisórias
  const totalVerbas = somar(
    saldoSalarioReceber,
        feriasVencidasReceber,
    feriasVencidasUmTerco,
    feriasProporcionaisReceber,
    feriasPropsUmTerco,
    decimoTerceiroSalario,
    valorAviso
  );

  //Deduções
  const inss = calcularDescontoINSS(saldoSalarioReceber);
  const inssDecimoTerceiro = calcularDescontoINSS(decimoTerceiroSalario);
  const irrf = calcularDescontoIRRF(
    saldoSalarioReceber,
    decimoTerceiroSalario,
    inss,
    inssDecimoTerceiro
  );
  const totalDeducao =
    somar(valorAviso, inss, inssDecimoTerceiro, irrf) * Number(-1);

  //Total Geral
  const totalLiquido = totalVerbas + fgtsTotalSaque + totalDeducao * Number(-1);

  const calculo: Resposta = {
    demissao: demissao,
    aviso: aviso,
    dataAdmissao: dataDemissao,
    dataDemissao: dataDemissao,

    verbas: {
      saldoSalario: saldoSalarioReceber,
      feriasVencidas: feriasVencidasReceber,
      feriasVencidasUmTerco: feriasVencidasUmTerco,
      feriasProps: feriasProporcionaisReceber,
      feriasPropsUmTerco: feriasPropsUmTerco,
      decimoTerceiroSalario: decimoTerceiroSalario,
      aviso: valorAviso,
      totalVerbas: totalVerbas,
    },
    fgts: {
      fgtsDepositado: fgtsDepositado,
      fgtsSaldoSalario: fgtsSaldoSalario,
      fgtsDecimoTerceiro: fgtsDecimoTerceiro,
      fgtsMulta: fgtsMulta,
      fgtsTotalSaque: fgtsTotalSaque,
    },
    deducao: {
      valorAviso: valorAviso,
      inss: inss,
      inssDecimoTerceiro: inssDecimoTerceiro,
      irrf: irrf,
      totalDeducao: totalDeducao,
    },
    totalLiquido: totalLiquido,
  };
  return calculo;
}
