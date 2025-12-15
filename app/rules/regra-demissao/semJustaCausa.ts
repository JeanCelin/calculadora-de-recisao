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
    fgtsSaqueDisponivel,
    fgtsTotal,
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
  // base IRRF
  const verbasTributaveisINSS = somar(
    saldoSalarioReceber,
    feriasVencidasReceber,
    feriasVencidasUmTerco,
    feriasProporcionaisReceber,
    feriasPropsUmTerco
  );

  const inss = calcularDescontoINSS(verbasTributaveisINSS);
  const inssDecimoTerceiro = calcularDescontoINSS(decimoTerceiroSalario);

  // Base IRRF
  const verbasTributaveisIRRF = somar(
    saldoSalarioReceber,
    feriasVencidasReceber,
    feriasVencidasUmTerco,
    feriasProporcionaisReceber,
    feriasPropsUmTerco
  );

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
      fgtsTotal: fgtsTotal,
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
