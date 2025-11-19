'use client'

import type { Recisao } from "@/app/types/recisao";
import type { TempoTrabalhado } from "../types/tempoTrabalhado";

import { feriasProporcionais } from "./ferias/calc-ferias-proporcinais";
import { feriasVencidas } from "./ferias/calc-ferias-vencidas";
import CalcFGTS from "./fgts/calc-fgts";
import { saldoSalario } from "./saldo-salario/calc-saldo-salario";
import { AvisoPrevio } from "../types/avisoPrevio";
import RegrasDemissao from "../rules/regra-demissao";
import { TiposDemissao } from "../types/tiposDemissao";
import { TiposAviso } from "../types/tiposAviso";
export default function calcCondicional(
  recisao: Recisao,
  salario: number,
  dataAdmissao: string,
  dataDemissao: string,
  faltas: number,
  tempoTrabalhado: TempoTrabalhado,
  periodos: number,
  aviso: AvisoPrevio
) {
  RegrasDemissao(TiposDemissao.pedido, TiposAviso.trabalhado);

  // const arrayCalc = [];

  // console.log(
  //   `---------------Calculo Recisório----------------------------------------`
  // );
  // console.log(`---------Verbas Recisórias--------`);

  // if (recisao.saldoSalario || aviso.NaoCumpridoPeloEmpregado) {
  //   arrayCalc.push(saldoSalario(salario, dataDemissao, faltas));
  //   console.log(
  //     ` --- Saldo de Salário R$ ${saldoSalario(salario, dataDemissao, faltas)}`
  //   );
  // }

  // if (recisao.feriasProporcionais || aviso.NaoCumpridoPeloEmpregado) {
  //   arrayCalc.push(feriasProporcionais(salario, tempoTrabalhado));
  //   console.log(
  //     ` --- Ferias Proporcionais R$ ${feriasProporcionais(
  //       salario,
  //       tempoTrabalhado
  //     )}`
  //   );
  // }
  // if (recisao.feriasVencidas || aviso.NaoCumpridoPeloEmpregado) {
  //   arrayCalc.push(feriasVencidas(salario, periodos));
  //   console.log(` --- Ferias Vencidas R$ ${feriasVencidas(salario, periodos)}`);
  // }

  // if (recisao.decimoTerceiro || aviso.NaoCumpridoPeloEmpregado) {
  //   arrayCalc.push(Number(decimoTerceiro(salario, dataAdmissao, dataDemissao)));
  //   console.log(
  //     ` --- Décino Terceiro R$ ${Number(
  //       decimoTerceiro(salario, dataAdmissao, dataDemissao)
  //     )}`
  //   );
  // }

  // console.log(`---------Calculo FGTS--------`);

  // if (recisao.fgtsCalc) {
  //   const fgts = CalcFGTS(
  //     salario,
  //     tempoTrabalhado,
  //     dataAdmissao,
  //     dataDemissao,
  //     recisao.fgtsCalc,
  //     recisao.fgtsSaque,
  //     recisao.fgtsMulta
  //   );
  //   const {
  //     fgtsBase,
  //     fgtsSaldoSalario,
  //     fgtsDecimoTerceiro,
  //     multa,
  //     totalSaque,
  //   } = fgts;

  //   arrayCalc.push(fgtsBase, fgtsSaldoSalario);
  //   console.log(` --- FGTS Base = R$ ${fgtsBase} `);
  //   console.log(` --- FGTS Saldo Salario = R$ ${fgtsSaldoSalario}`);
  //   console.log(` --- FGTS Décimo Terceiro = R$ ${fgtsDecimoTerceiro}`);
  //   console.log(` --- FGTS Multa = R$ ${multa}`);
  //   console.log(` --- Total Para Saque = R$ ${totalSaque}`);
  // }

  // const newArray = arrayCalc.map((element) => {
  //   return Number(element);
  // });

  // const total = newArray.reduce(
  //   (acumulador, valorAtual) => acumulador + valorAtual,
  //   0
  // );
  // console.log(`---------Total a Receber--------`);

  // console.log(`Total R$ ${total.toFixed(2)}`);

  // console.log(
  //   `--------------- FIM do Calculo Recisório----------------------------------------`
  // );
}
