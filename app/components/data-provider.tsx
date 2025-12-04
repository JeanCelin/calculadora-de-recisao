"use client";

import { createContext, useState } from "react";

export const DadosContext = createContext(null);

export function DadosProvider({ children }) {
  const [dados, setDados] = useState(null);
  const [resultado, setResultado] = useState(null);

  const value = {
    dados,
    setDados,
    resultado,
    setResultado,
  };

  return (
    <DadosContext.Provider value={value}>
      {children}
    </DadosContext.Provider>
  );
}
