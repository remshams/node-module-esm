export const echo = (text: string): string => {
  console.log(text, 'echo: ');
  return text;
};

export const swallow = (text: string) => {
  console.log('swallow');
};
