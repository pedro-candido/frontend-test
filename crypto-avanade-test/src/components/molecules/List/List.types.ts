import { CryptoSymbol } from '@/types/getSymbols';

export type IFlow = 'create' | 'full';

export interface IList {
  symbols: CryptoSymbol[] | [];
}
