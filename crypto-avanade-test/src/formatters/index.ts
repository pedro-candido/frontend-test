function getArrayAndCreateString(arr: string[]) {
  return arr.map((word: string) => `${word.toLowerCase()}@ticker`).join('/');
}

export { getArrayAndCreateString };
