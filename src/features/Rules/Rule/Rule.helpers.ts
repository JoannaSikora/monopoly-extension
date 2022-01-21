export const pluralize = (count: number, noun: string, suffix: string = 's') => {
  if (count > 1) {
    return noun + suffix;
  }

  return noun;
};
