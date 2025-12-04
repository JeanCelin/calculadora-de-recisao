"use client";

import { useDadosStore } from "../store/dados";
import { TiposAviso } from "../types/tiposAviso";
import { TiposDemissao } from "../types/tiposDemissao";
import { calcRecisorio } from "../utils/calcRecisorio";
import {
  mapToTiposAviso,
  mapToTiposDemissao,
} from "../utils/mappers/form-mappers";

import { FormEvent } from "react";

export default function Form() {
  const setDados = useDadosStore((s) => s.setDados);

  interface DadosForm {
    dataAdmissao: string;
    dataDemissao: string;
    salario: number;
    faltas: number;
    aviso: TiposAviso;
    diasAviso: number;
    demissao: TiposDemissao;
    feriasVencidas: number;
    feriasVencidasPeriodos: number;
  }

  function toStringValue(
    value: FormDataEntryValue | null,
    field?: string
  ): string {
    if (typeof value === "string") return value;
    return "";
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    try {
      // validar/transformar
      const dataAdmissao = toStringValue(
        form.get("dataAdmissao"),
        "dataAdmissao"
      );
      const dataDemissao = toStringValue(
        form.get("dataDemissao"),
        "dataDemissao"
      );
      const salarioRaw = form.get("salAtual");
      if (salarioRaw === null) throw new Error("Salário ausente");
      const salario = Number(salarioRaw);
      if (Number.isNaN(salario)) throw new Error("Salário inválido");

      const aviso = mapToTiposAviso(form.get("tipoAviso"));
      const demissao = mapToTiposDemissao(form.get("tipoRecisao"));

      const dados: DadosForm = {
        dataAdmissao,
        dataDemissao,
        salario,
        faltas: 0,
        aviso,
        diasAviso: 30,
        demissao,
        feriasVencidas:
          toStringValue(form.get("feriasVencidas")) === "Sim" ? 1 : 0,
        feriasVencidasPeriodos: 0,
      };

      // persistir globalmente
      setDados(dados);

      // calcular (pode ser sync ou async — aqui trato como sync)
      calcRecisorio(dados);
    } catch (err) {
      // lide com erros de validação de forma amigável
      console.error("Erro ao processar formulário:", err);
      // (opcional) exiba um toast / mensagem pro usuário
    }
  }

  return (
    <form className="grid text gap-4 p-4" onSubmit={handleSubmit}>
      <div className="flex gap-1 flex-col">
        <label htmlFor="dataAdmissao">Data de Admissão </label>
        <input
          name="dataAdmissao"
          id="dataAdmissao"
          className="input"
          type="date"
          required
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="dataDemissao">Data da Rescisão </label>
        <input
          name="dataDemissao"
          id="dataDemissao"
          className="input"
          type="date"
          required
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="salAtual">Salário Atual (R$) </label>
        <input
          name="salAtual"
          id="salAtual"
          className="input"
          type="number"
          required
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="tipoRecisao">Tipo de Rescisão </label>
        <select
          name="tipoRecisao"
          id="tipoRecisao"
          className="h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-300 focus:ring-1 focus:ring-blue-200">
          <option value={TiposDemissao.pedido}>{TiposDemissao.pedido}</option>
          <option value={TiposDemissao.semJustaCausa}>
            {TiposDemissao.semJustaCausa}
          </option>
          <option value={TiposDemissao.justaCausa}>
            {TiposDemissao.justaCausa}
          </option>
        </select>
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="tipoAviso">Aviso Prévio</label>
        <select
          name="tipoAviso"
          id="tipoAviso"
          className="h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-300 focus:ring-1 focus:ring-blue-200">
          <option value={TiposAviso.trabalhado}>{TiposAviso.trabalhado}</option>
          <option value={TiposAviso.indenizado}>{TiposAviso.indenizado}</option>
          <option value={TiposAviso.dispensado}>{TiposAviso.dispensado}</option>
          <option value={TiposAviso.naoCumprido}>
            {TiposAviso.naoCumprido}
          </option>
        </select>
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="feriasVencidas">Férias vencidas a pagar?</label>
        <select
          name="feriasVencidas"
          id="feriasVencidas"
          className="h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-300 focus:ring-1 focus:ring-blue-200">
          <option value="Não">Não</option>
          <option value="Sim">Sim</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary text-nowrap m-auto">
        Calcular
      </button>
    </form>
  );
}
