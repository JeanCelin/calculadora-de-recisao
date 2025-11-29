"use client";

import { TiposDemissao } from "@/app/types/tiposDemissao";

import Pedido from "./pedido";
import JustaCausa from "./justaCausa";

export default function RegrasDemissao(tiposDemissao: TiposDemissao) {
  console.log(tiposDemissao)
  let calculo;
  if (tiposDemissao === "PEDIDO") {
    calculo = Pedido();
    return console.log(calculo);
  }
  if (tiposDemissao === "JUSTA CAUSA") {
    calculo = JustaCausa();
  }
  return console.log(calculo);
  return calculo;
}
