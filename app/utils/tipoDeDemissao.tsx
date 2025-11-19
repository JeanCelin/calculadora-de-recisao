import { Recisao } from "../types/recisao";
import { TiposDemissao } from "../types/tiposDemissao";

export default function TiposDeDemissao(tipoDemissao: TiposDemissao) {
  let recisao: Recisao = {
    saldoSalario: false,
    decimoTerceiro: false,
    feriasProporcionais: false,
    fgtsCalc: true,
    fgtsSaque: false,
    fgtsMulta: false,
    feriasVencidas: false,
  };

  if (tipoDemissao === TiposDemissao.pedido) {
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
  if (tipoDemissao === TiposDemissao.justa) {
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
  if (tipoDemissao === TiposDemissao.semJusta) {
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
