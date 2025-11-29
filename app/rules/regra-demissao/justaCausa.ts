"use client";

import { useDados } from "@/app/components/data-provider";

import { DecimoTerceiro } from "@/app/utils/decimo-terceiro/calc-decimo-terceiro";
import { FeriasProporcionais } from "@/app/utils/ferias/calc-ferias-proporcinais";
import { CalcferiasVencidas } from "@/app/utils/ferias/calc-ferias-vencidas";
import { CalcUmTercoFerias } from "@/app/utils/ferias/calc-um-terco-ferias";
import Fgts from "@/app/utils/fgts";
import { saldoSalario } from "@/app/utils/saldo-salario/calc-saldo-salario";
import { Resposta } from "@/app/types/resposta";

import { calcularDescontoINSS } from "@/app/utils/inss/calc-desconto-inss";
import { calcularDescontoIRRF } from "@/app/utils/irrf/calc-desconto-irrf";
import { somar } from "@/app/utils/somar";
import { Aviso } from "../regra-aviso";

export default function JustaCausa() {
  const { salario, dataDemissao, faltas, feriasVencidasPeriodos, aviso, demissao } =
    useDados();
  /* Quando o funcionário pede demissão, ele tem direito a receber:
    1) Saldo Salário;*/
  const saldoSalarioReceber = saldoSalario(salario, dataDemissao, faltas);
  /*
    2) Ferias Vencidas + 1/3; */
    const feriasVencidasReceber = feriasVencidasPeriodos
    ? CalcferiasVencidas(salario, feriasVencidasPeriodos)
    : 0;
    const feriasVencidasUmTerco = CalcUmTercoFerias(feriasVencidasReceber)
    /*
    3) Férias Proporcionais + 1/3; */
    // const feriasProporcionaisReceber = FeriasProporcionais();
    // const feriasPropsUmTerco = CalcUmTercoFerias(feriasProporcionaisReceber);
    /*
    4) 13º Salário Proporcional; */
    const decimoTerceiroSalario = DecimoTerceiro();
    /* 
    5) Saldo FGTS depositado (O funcionário não recebe multa e não saca FGTS, mas o saldo continua lá.)
    6) Depósito FGTS do mês da Recisão
    */
 const valorAviso = Aviso(); //Aviso Previo
  //FGTS
  const {
    fgtsDepositado,
    fgtsSaldoSalario,
    fgtsDecimoTerceiro,
    fgtsMulta,
    fgtsTotalSaque,
  } = Fgts(false, false);

  /*
    ------------------
    Não tem direito:
    1) Multa FGTS;
    2) Saque do FGTS;
    3) Seguro-Desemprego;
    4) Aviso Prévio Indenizado (se o funcionário não trabalhar, ele PAGA a empresa);
 */

// Verbas Recisórias
const totalVerbas = somar(
  saldoSalarioReceber,
  valorAviso
  );

  //Deduções
  const inss = calcularDescontoINSS(saldoSalarioReceber);
  const inssDecimoTerceiro = calcularDescontoINSS(decimoTerceiroSalario);
  const irrf = calcularDescontoIRRF(
    saldoSalarioReceber,
    decimoTerceiroSalario,
    inss,
    inssDecimoTerceiro,
  );
  const totalDeducao =
    somar(valorAviso, inss, inssDecimoTerceiro, irrf);

  //Total Geral
  const totalLiquido = totalVerbas + fgtsTotalSaque + (totalDeducao  * Number(-1));



  const calculo: Resposta = {
    demissao: demissao,
    aviso: aviso,

    verbas: {
      saldoSalario: saldoSalarioReceber,
      feriasVencidas: feriasVencidasReceber,
      feriasVencidasUmTerco: feriasVencidasUmTerco,
      feriasProps: false,
      feriasPropsUmTerco: false,
      decimoTerceiroSalario: false,
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
