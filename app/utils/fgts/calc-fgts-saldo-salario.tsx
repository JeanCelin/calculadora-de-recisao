export default function FgtsSaldoSalario (fgtsBase: number, taxaFGTS: number) {

  return (
    
    Number(fgtsBase) * taxaFGTS
  )
}