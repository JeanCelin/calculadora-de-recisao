import { avisoTrabalhado } from "./trabalhado";
import { avisoIndenizado } from "./indenizado";
import { avisoNaoCumprido } from "./naoCumprido";
import { avisoDispensado } from "./dispensado";
import { Dados } from "@/app/types/dados";

export function calcAviso(dados: Dados) {
  const { aviso } = dados;

  switch (aviso) {
    case "TRABALHADO":
      return avisoTrabalhado();
    case "INDENIZADO":
      return avisoIndenizado(dados);
    case "NAOCUMPRIDO":
      return avisoNaoCumprido(dados);
    case "DISPENSADO":
      return avisoDispensado();
    default:
      throw new Error("Tipo de aviso não informado ou inválido");
  }
}
