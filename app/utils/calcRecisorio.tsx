'use client'


import RegrasDemissao from "../rules/regra-demissao";
import { useDados } from "../components/data-provider";

export default function CalcRecisorio() {
  const { demissao} = useDados()
  RegrasDemissao(demissao);

  
}
