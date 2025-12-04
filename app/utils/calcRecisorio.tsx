"use client";

import { Dados } from "../types/dados";
import RegrasDemissao from "../rules/regra-demissao";

export default function CalcRecisorio(dados: Dados) {

  RegrasDemissao(dados);
}
