import AvisoTrabalhado from "./trabalhado";
import { AvisoIndenizado } from "./indenizado";
import { AvisoNaoCumprido } from "./naoCumprido";
import { AvisoDispensado } from "./dispensado";
import { Dados } from "@/app/types/dados";

export function Aviso(dados: Dados) {
  const { aviso } = dados;

  switch (aviso) {
    case "TRABALHADO":
      return AvisoTrabalhado();
    case "INDENIZADO":
      return AvisoIndenizado(dados);
    case "NAOCUMPRIDO":
      return AvisoNaoCumprido(dados);
    case "DISPENSADO":
      return AvisoDispensado();
    default:
      throw new Error("Tipo de aviso não informado ou inválido");
  }
}

