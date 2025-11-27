'use client'

import { TiposDemissao } from "@/app/types/tiposDemissao";

import Pedido from "./pedido";

export default function RegrasDemissao(
  tiposDemissao: TiposDemissao,

) {
  let calculo;
  if (tiposDemissao === "PEDIDO") {
    calculo = Pedido();
    return console.log(calculo)
  }
  return calculo;
}
