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

export function pedido(dados: Dados) {
  const {
    salario,
    dataAdmissao,
    dataDemissao,
    faltas,
    feriasVencidasPeriodos,
    quantidadeDependentes,
    aviso,
    demissao,
  } = dados;
  /* Quando o funcionário pede demissão, ele tem direito a receber:
    1) Saldo Salário;*/
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
    fgtsSaqueDisponivel,
    fgtsTotal,
  } = fgts(false, false, dados);

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
    decimoTerceiroSalario,
    feriasProporcionaisReceber,
    feriasPropsUmTerco,
    feriasVencidasReceber,
    feriasVencidasUmTerco,
     aviso == "INDENIZADO" ? valorAviso: 0
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

  // IRRF Décimo Terceiro
  // Não entra dependentes, usa INSS do décimo terceiro

  const irrfDecimoTerceiro = calcularDescontoIRRF(
    decimoTerceiroSalario,
    inssDecimoTerceiro,
    0
  )


  const totalDeducao = somar(aviso == "NÃO CUMPRIDO" ? valorAviso: 0, inss, inssDecimoTerceiro, irrf, irrfDecimoTerceiro);

  //Total Geral
  const totalLiquido =
    totalVerbas + fgtsSaqueDisponivel + totalDeducao * Number(-1);

  const calculo: Resposta = {
    demissao: demissao,
    aviso: aviso,
    dataAdmissao: dataAdmissao,
    dataDemissao: dataDemissao,

    verbas: {
      saldoSalario: saldoSalarioReceber,
      feriasVencidas: feriasVencidasReceber,
      feriasVencidasUmTerco: feriasVencidasUmTerco,
      feriasProps: feriasProporcionaisReceber,
      feriasPropsUmTerco: feriasPropsUmTerco,
      decimoTerceiroSalario: decimoTerceiroSalario,
      aviso: aviso == "INDENIZADO" ? valorAviso: 0,
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
      valorAviso: aviso == "NÃO CUMPRIDO" ? valorAviso: 0,
      inss: inss,
      inssDecimoTerceiro: inssDecimoTerceiro,
      irrf: irrf,
      irrfDecimoTerceiro: irrfDecimoTerceiro,
      totalDeducao: totalDeducao,
    },
    totalLiquido: totalLiquido,
  };
  return calculo;
}
