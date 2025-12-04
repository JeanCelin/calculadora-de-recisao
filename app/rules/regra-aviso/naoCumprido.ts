import { Dados } from "@/app/types/dados"



export function AvisoNaoCumprido (dados: Dados) {
  const { salario} = dados
  return Number(salario * -1)
}