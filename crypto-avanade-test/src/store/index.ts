import { api } from '@/api';
import { ExchangeInfo } from '@/types/getSymbols';

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

export { getData, getSymbols };
