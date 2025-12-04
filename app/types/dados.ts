import { TiposAviso } from "../types/tiposAviso";
import { TiposDemissao } from "../types/tiposDemissao";

export type Dados = {
  dataAdmissao: string;
  dataDemissao: string;
  salario: number;
  faltas: number | undefined;
  feriasVencidasPeriodos: number;
  aviso: TiposAviso;
  diasAviso: number;
  demissao: TiposDemissao;
};