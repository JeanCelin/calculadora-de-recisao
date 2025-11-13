

type Ferias = {
  feriasProporcionais: boolean;
  feriasVencidas: boolean;
}

type Demissao = {
  saldoSalario: boolean;
  decimoTerceiro: boolean;
  fgts: boolean
};






export default function TiposDeDemissao(tipoDemissao: string) {


  if (tipoDemissao === 'pedidoPeloFuncionario') {
    const calc: Demissao & Ferias = {
      saldoSalario: true,
      decimoTerceiro: true,
      feriasProporcionais: true,
      feriasVencidas: false,
      fgts: false
    };
    return calc;
  }


}
