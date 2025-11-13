import { Recisao } from "../types/recisao";

let recisao: Recisao = {
  saldoSalario: false,
  decimoTerceiro: false,
  feriasProporcionais: false,
  feriasVencidas: false,
  fgts: false,
};

export default function TiposDeDemissao(tipoDemissao: string) {
  if (tipoDemissao === "pedidoPeloFuncionario") {
    recisao = {
      saldoSalario: true,
      decimoTerceiro: true,
      feriasProporcionais: true,
      feriasVencidas: false,
      fgts: false,
    };
    return recisao;
  }
  return recisao
}
