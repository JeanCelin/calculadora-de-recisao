import { useDados  } from "@/app/components/data-provider"
import { dataLocalBrasil } from "../conversor-data/data-local-brasil";

export default function FgtsSaldoSalario ( taxaFGTS: number) {
  const {salario, dataDemissao} = useDados()
 const data = dataLocalBrasil(dataDemissao);
 const ultimoDiaTrabalhado = data.getDate()



  return (
    Number(((salario/30) * ultimoDiaTrabalhado * taxaFGTS).toFixed(2))
  
  )
}