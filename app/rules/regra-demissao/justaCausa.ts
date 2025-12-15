import { decimoTerceiro } from "@/app/utils/decimo-terceiro/calc-decimo-terceiro";

import { calcferiasVencidas } from "@/app/utils/ferias/calc-ferias-vencidas";
import { calcUmTercoFerias } from "@/app/utils/ferias/calc-um-terco-ferias";
import { saldoSalario } from "@/app/utils/saldo-salario/calc-saldo-salario";
import { Resposta } from "@/app/types/resposta";

import { calcularDescontoINSS } from "@/app/utils/inss/calc-desconto-inss";
import { calcularDescontoIRRF } from "@/app/utils/irrf/calc-desconto-irrf";
import { somar } from "@/app/utils/somar";
import { calcAviso } from "../regra-aviso";
import { Dados } from "@/app/types/dados";
import { fgts } from "@/app/utils/fgts";

export function justaCausa(dados: Dados) {
  const {
    salario,
    dataDemissao,
    faltas,
    feriasVencidasPeriodos,
    quantidadeDependentes,
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
  // Demissão Por Justa Causa o funcionário perde o direito de ferias proporcionais
  // const feriasProporcionaisReceber = FeriasProporcionais();
  // const feriasPropsUmTerco = CalcUmTercoFerias(feriasProporcionaisReceber);
  /*
    4) 13º Salário Proporcional; */
  const decimoTerceiroSalario = decimoTerceiro(dados);
  /* 
    5) Saldo FGTS depositado (O funcionário não recebe multa e não saca FGTS, mas o saldo continua lá.)
    6) Depósito FGTS do mês da Recisão
    */
  const valorAviso = calcAviso(dados); //Aviso Previo
  //FGTS
  const {
    fgtsDepositado,
    fgtsSaldoSalario,
    fgtsDecimoTerceiro,
    fgtsMulta,
    fgtsTotal,
    fgtsSaqueDisponivel,
  } = fgts(false, false, dados);

  // Verbas Recisórias
  const totalVerbas = somar(
    saldoSalarioReceber,
    valorAviso,
    decimoTerceiroSalario,
    feriasVencidasReceber,
    feriasVencidasUmTerco
  );

  //Deduções
  // base IRRF
  const verbasTributaveisINSS = somar(
    saldoSalarioReceber,
    feriasVencidasReceber,
    feriasVencidasUmTerco
  );
  //Não recebe ferias proporcinais em Justa causa

  const inss = calcularDescontoINSS(verbasTributaveisINSS);
  const inssDecimoTerceiro = calcularDescontoINSS(decimoTerceiroSalario);

  // Base IRRF
  const verbasTributaveisIRRF = somar(
    saldoSalarioReceber,
    feriasVencidasReceber,
    feriasVencidasUmTerco
  );
  //Não recebe ferias proporcinais em Justa causa

  const irrf = calcularDescontoIRRF(
    verbasTributaveisIRRF,
    inss,
    quantidadeDependentes
  );
  const totalDeducao = somar(valorAviso, inss, inssDecimoTerceiro, irrf);

  //Total Geral
  const totalLiquido =
    totalVerbas + fgtsSaqueDisponivel + totalDeducao * Number(-1);

  const calculo: Resposta = {
    demissao: demissao,
    aviso: aviso,
    dataAdmissao: dataDemissao,
    dataDemissao: dataDemissao,

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
      fgtsTotal,
      fgtsSaqueDisponivel: fgtsSaqueDisponivel,
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
