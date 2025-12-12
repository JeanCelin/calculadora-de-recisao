 export const verifyText = (value: false | null | 0 | number | boolean) => {
    if (
      value === null ||
      value === false ||
      value === 0 ||
      value === undefined
    ) {
      return "-";
    }
    return value;
  };

