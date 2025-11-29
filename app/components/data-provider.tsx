'use client'

import { createContext, useContext } from "react";
import { TiposAviso } from "../types/tiposAviso";
import { TiposDemissao } from "../types/tiposDemissao";

type Dados = {
  dataAdmissao: string;
  dataDemissao: string;
  salario: number;
  faltas: number;
  feriasVencidasPeriodos: number;
  aviso: TiposAviso;
  diasAviso: number;
  demissao: TiposDemissao;
};


const dadosPadrao: Dados = {
  dataAdmissao: "2024-01-01",
  dataDemissao: "2025-11-13",
  salario: 10000,
  faltas: 0, // Faltas Injustificadas desconta do saldo do salario
  feriasVencidasPeriodos: 0,
  demissao: TiposDemissao.justaCausa,
  aviso: TiposAviso.trabalhado,
  diasAviso: 30,
};




const DadosContext = createContext<Dados>(dadosPadrao);

export const DadosProvider = ({ children}: {children: React.ReactNode})=>{
  return (
    <DadosContext.Provider value={dadosPadrao}>
      {children}
    </DadosContext.Provider>
  )
}

export const  useDados = () => useContext(DadosContext)