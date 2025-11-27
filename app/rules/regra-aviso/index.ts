import { useDados } from "@/app/components/data-provider";
import AvisoTrabalhado from "./trabalhado";
import { AvisoIndenizado } from "./indenizado";
import { AvisoNaoCumprido } from "./naoCumprido";
import { AvisoDispensado } from "./dispensado";

export function Aviso() {
  const { aviso } = useDados();

  switch (aviso) {
    case "TRABALHADO":
      return AvisoTrabalhado();
    case "INDENIZADO":
      return AvisoIndenizado();
    case "NAOCUMPRIDO":
      return AvisoNaoCumprido();
    case "DISPENSADO":
      return AvisoDispensado();
    default:
      throw new Error("Tipo de aviso não informado ou inválido");
  }
}

