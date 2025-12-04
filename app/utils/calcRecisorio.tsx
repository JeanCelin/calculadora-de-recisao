import { Dados } from "../types/dados";
import { regrasDemissao } from "../rules/regra-demissao";

export function calcRecisorio(dados: Dados) {
  return regrasDemissao(dados);
}
