import { CryptoSymbol } from '@/types/getSymbols';

export type IFlow = 'create' | 'full';

export interface ISearchList {
  symbols: CryptoSymbol[] | [];
  textToFilter?: string;
  flow: IFlow;
}
