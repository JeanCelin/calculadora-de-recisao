  export const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1") // adiciona espaço antes de letra maiúscula
      .replace(/^./, (c) => c.toUpperCase()); // capitaliza primeira letra
  };
