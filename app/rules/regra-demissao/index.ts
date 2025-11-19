'use client'

import { TiposDemissao } from "@/app/types/tiposDemissao";
import { TiposAviso } from "@/app/types/tiposAviso";
import Pedido from "./pedido";

export default function RegrasDemissao(
  tiposDemissao: TiposDemissao,
  tiposAviso: TiposAviso
) {
  let calculo;
  if (tiposDemissao === "PEDIDO") {
    calculo = Pedido();
  }
  return calculo;
}
