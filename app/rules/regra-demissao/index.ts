"use client";

import { TiposDemissao } from "@/app/types/tiposDemissao";

import Pedido from "./pedido";
import JustaCausa from "./justaCausa";
import SemJustaCausa from "./semJustaCausa";

export default function RegrasDemissao(tiposDemissao: TiposDemissao) {
  console.log(tiposDemissao);
  let calculo;
  if (tiposDemissao === "PEDIDO") {
    calculo = Pedido();
    return console.log(calculo);
  }
  if (tiposDemissao === "JUSTA CAUSA") {
    calculo = JustaCausa();
  }
  if (tiposDemissao === "SEM JUSTA CAUSA") {
    calculo = SemJustaCausa();
  }
  return console.log(calculo);
  return calculo;
}
