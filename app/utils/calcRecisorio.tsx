'use client'
import { TiposDemissao } from "../types/tiposDemissao";
import { TiposAviso } from "../types/tiposAviso";

import RegrasDemissao from "../rules/regra-demissao";

export default function CalcRecisorio() {

  RegrasDemissao(TiposDemissao.pedido, TiposAviso.trabalhado );

  
}
