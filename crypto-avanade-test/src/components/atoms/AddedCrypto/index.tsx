import { CryptoSymbol } from '@/types/getSymbols';

import { Container, StyledLabel } from './AddedCrypto.styles';

interface IAddedCrypto {
  symbol: string;
}

function AddedCrypto({ symbol }: IAddedCrypto) {
  console.log(symbol);
  return (
    <Container>
      <StyledLabel numberOfLines={1}>{symbol}</StyledLabel>
      {/* <StyledButton
        testID={productTestId}
        onPress={handlePress}
        type={'secondary'}
        iconName={'close'}
      /> */}
    </Container>
  );
}

export { AddedCrypto };
