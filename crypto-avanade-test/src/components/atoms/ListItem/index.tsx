import { CryptoSymbol } from '@/types/getSymbols';
import Label from '@components/atoms/Label';

import { Container } from './ListItem.styles';

function Product({ symbol, baseAsset, status, quoteAsset }: CryptoSymbol) {
  console.log({ symbol });
  return (
    <Container>
      <Label>{symbol}</Label>
    </Container>
  );
}

export default Product;
