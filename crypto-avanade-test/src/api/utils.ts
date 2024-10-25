import { api } from '@/api';
import { CryptoSymbol, ExchangeInfo } from '@/types/getSymbols';

async function getSymbols() {
  try {
    const { data } = await api.get('/exchangeInfo');

    return data;
  } catch (error) {
    console.log(error);

    return 'Algo deu errado';
  }
}

async function getData() {
  const { symbols } = (await getSymbols()) as ExchangeInfo;

  return symbols;
}

async function callApiIfNecessary(setFullList: (param: CryptoSymbol[]) => void) {
  const content = await getData();
  setFullList(content);

  return content;
}

export { getData, getSymbols, callApiIfNecessary };
