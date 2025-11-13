type TempoTrabalhado = {
  anos: number;
  meses: number;
  dias: number;
}

export default function CalcFGTS(salario: number, tempoTrabalhado: TempoTrabalhado, multa?: boolean) {
  console.log(`---------------CalcFGTS------------`)
  const { anos, meses, dias } = tempoTrabalhado;

  let mesesTotais:number = meses

  if(anos >= 1) {
   mesesTotais += (anos * 12)
  } 
  console.log(`Propriedades Recebidas: `)
  console.log(`Salario: ${salario}`)
  console.log(`TempoTrabalhado: Anos ${anos}, Meses ${mesesTotais}, Dias ${dias} `)
  //Empregador deve depositar 8% do salario bruto todo mes para o FGTS
  console.log(`------------------------------`)

  const fgtsBase = salario * 0.08 * mesesTotais;
  const fgtsMulta = 0.4
  const fgtsBruto = multa ? fgtsBase *  fgtsMulta : fgtsBase
  
  console.log(`Resutado do calculo: ${fgtsBruto}`)
  console.log(`Fim da operação`)
  return fgtsBruto;
}
