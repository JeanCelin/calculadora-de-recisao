"use client";

import { TiposDemissao } from "@/app/types/tiposDemissao";

import Pedido from "./pedido";
import JustaCausa from "./justaCausa";
import SemJustaCausa from "./semJustaCausa";
import { Dados } from "@/app/types/dados";

export default function RegrasDemissao(dados: Dados) {

  let calculo;
  if (dados.demissao === "PEDIDO") {
    calculo = Pedido(dados);
    return console.log(calculo);
  }
  if (dados.demissao === "JUSTA CAUSA") {
    calculo = JustaCausa(dados);
  }
  if (dados.demissao === "SEM JUSTA CAUSA") {
    calculo = SemJustaCausa(dados);
  }
  return console.log(calculo);
  return calculo;
}
