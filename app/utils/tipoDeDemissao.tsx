import { Recisao } from "../types/recisao";
import { TipoDemissao } from "../types/tiposDemissao";

export default function TiposDeDemissao(tipoDemissao: TipoDemissao) {
  let recisao: Recisao = {
    saldoSalario: false,
    decimoTerceiro: false,
    feriasProporcionais: false,
    fgtsCalc: true,
    fgtsSaque: false,
    fgtsMulta: false,
    feriasVencidas: false,
  };

  if (tipoDemissao === TipoDemissao.pedido) {
    recisao = {
      saldoSalario: true,
      decimoTerceiro: true,
      feriasProporcionais: true,
      fgtsCalc: true,
      fgtsSaque: false,
      fgtsMulta: false,
      feriasVencidas: false,
    };
  }
  if (tipoDemissao === TipoDemissao.justa) {
    recisao = {
      saldoSalario: true,
      decimoTerceiro: true,
      feriasProporcionais: true,
      fgtsCalc: true,
      fgtsSaque: false,
      fgtsMulta: false,
      feriasVencidas: false,
    };
  }
  if (tipoDemissao === TipoDemissao.semJusta) {
    recisao = {
      saldoSalario: true,
      decimoTerceiro: true,
      feriasProporcionais: true,
      fgtsCalc: true,
      fgtsSaque: true,
      fgtsMulta: false,
      feriasVencidas: false,
    };
  }

  return recisao;
}
