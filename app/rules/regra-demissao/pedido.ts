'use client'

import { useDados } from "@/app/components/data-provider";

import { DecimoTerceiro } from "@/app/utils/decimo-terceiro/calc-decimo-terceiro";
import { FeriasProporcionais } from "@/app/utils/ferias/calc-ferias-proporcinais";
import { CalcferiasVencidas } from "@/app/utils/ferias/calc-ferias-vencidas";
import { CalcUmTercoFerias } from "@/app/utils/ferias/calc-um-terco-ferias";
import Fgts from "@/app/utils/fgts";
import { saldoSalario } from "@/app/utils/saldo-salario/calc-saldo-salario";
import { Resposta } from "@/app/types/resposta";
import { TiposAviso } from "@/app/types/tiposAviso";
import { calcularDescontoINSS } from "@/app/utils/inss/calc-desconto-inss";
import { calcularDescontoIRRF } from "@/app/utils/irrf/calc-desconto-irrf";
import { somar } from "@/app/utils/somar";
import { aviso } from "../regra-aviso";



export default function Pedido(tiposAviso: TiposAviso ) {
  const { salario, dataDemissao, faltas, feriasVencidasPeriodos, diasAviso } = useDados();

//Aviso Previo
  const tipoAviso = aviso(tiposAviso, salario, diasAviso)


  // Verbas Recisórias
  const saldoSalarioReceber = saldoSalario(salario, dataDemissao, faltas);
  const feriasProporcionaisReceber = FeriasProporcionais();
  const feriasUmTerco = CalcUmTercoFerias(feriasProporcionaisReceber)
  const feriasVencidasReceber = feriasVencidasPeriodos ? CalcferiasVencidas(salario, feriasVencidasPeriodos) : 0;
  const decimoTerceiroSalario = DecimoTerceiro();
  const totalVerbas = somar(saldoSalarioReceber,decimoTerceiroSalario,feriasProporcionaisReceber,feriasUmTerco)

  //FGTS
  const { fgtsDepositado, fgtsSaldoSalario, fgtsDecimoTerceiro, fgtsMulta, fgtsTotalSaque } = Fgts();

  //Deduções
  const inss = calcularDescontoINSS(saldoSalarioReceber)
  const inssDecimoTerceiro = calcularDescontoINSS(decimoTerceiroSalario)
  const irrf = calcularDescontoIRRF(saldoSalarioReceber, decimoTerceiroSalario, inss, inssDecimoTerceiro, tiposAviso)
  const totalDeducao = somar(salario, inss, inssDecimoTerceiro, irrf) * Number(-1)

  //Total Geral
  const totalLiquido = totalVerbas + fgtsTotalSaque + totalDeducao
  console.log(`------------------Demissao Pedida------------------`);
  console.log(`Saldo salário: R$${saldoSalarioReceber}`);
  console.log(`Férias Proporciais: R$${feriasProporcionaisReceber}`);
  console.log(`1/3 de Férias: R$${feriasUmTerco}`)
  console.log(`Férias Vencidas: R$${feriasVencidasReceber}`);
  console.log(`Décimo Terceiro Proporcional: R$${decimoTerceiroSalario}`);

  console.log(`------------------FGTS------------------`)
  console.log(`FGTS Depositado: R$${fgtsDepositado}`);
  console.log(`FGTS Saldo Salario: R$${fgtsSaldoSalario}`);
  console.log(`FGTS Décimo Terceiro: R$${fgtsDecimoTerceiro}`);

  console.log(`------------------DESCONTOS------------------`)
    console.log(`INSS: R$${inss}`);
    console.log(`INSS 13º Salario: R$${inssDecimoTerceiro}`);
    console.log(`IRRF ${irrf}`)
    console.log(`Total de Dedução: ${totalDeducao}`)


  console.log(`Total Liquido; R$${totalLiquido}`)
    
  const calculo: Resposta =  {
    demissao: "pedido",
    aviso: tiposAviso,
    verbas: {
      saldoSalario: saldoSalarioReceber,
      feriasProps: feriasProporcionaisReceber,
      umTercoFerias: feriasUmTerco,
      feriasVencidas: feriasVencidasReceber,
      decimoTerceiroSalario: decimoTerceiroSalario,
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
      inss: inss,
      inssDecimoTerceiro: inssDecimoTerceiro,
      irrf: irrf,
      totalDeducao: totalDeducao,
    },
    totalLiquido: totalLiquido
  }
  return calculo

}
