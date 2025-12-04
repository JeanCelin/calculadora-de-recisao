// app/store/dados.ts
import { create } from "zustand";

import { Resposta } from "../types/resposta";
import { Dados } from "../types/dados";


type Store = {
  dados: Dados | null;
  setDados: (d: Dados) => void;
  resultado: Resposta | null; // depois tipa melhor
  setResultado: (r: Resposta) => void;
};

export const useDadosStore = create<Store>((set) => ({
  dados: null,
  setDados: (d) => set({ dados: d }),

  resultado: null,
  setResultado: (r) => set({ resultado: r }),
}));
