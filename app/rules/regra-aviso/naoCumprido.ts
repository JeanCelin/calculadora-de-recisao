import { useDados } from "@/app/components/data-provider";


export function AvisoNaoCumprido () {
  const { salario} = useDados()
  return Number(salario * -1)
}