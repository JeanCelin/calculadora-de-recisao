import { Dados } from "@/app/types/dados"



export function avisoNaoCumprido (dados: Dados) {
  const { salario} = dados
  return Number(salario * -1)
}