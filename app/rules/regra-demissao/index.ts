import { pedido } from "./pedido";
import { justaCausa } from "./justaCausa";
import { semJustaCausa } from "./semJustaCausa";
import { Dados } from "@/app/types/dados";

export function regrasDemissao(dados: Dados) {
  let calculo;
  if (dados.demissao === "PEDIDO") {
    calculo = pedido(dados);
    return calculo;
  }
  if (dados.demissao === "JUSTA CAUSA") {
    calculo = justaCausa(dados);
    return calculo;
  }
  if (dados.demissao === "SEM JUSTA CAUSA") {
    calculo = semJustaCausa(dados);
    return calculo;
  }
  return calculo;
}
