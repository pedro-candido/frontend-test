import { Text } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import Label from '@/components/atoms/Label';
import { ScreenContainer } from '@/components/atoms/ScreenContainer/index.styles';
import { useListsContext } from '@/context';
import useBinanceSocket from '@/websocket';
import EmptyList from '@components/atoms/ListEmptyComponent';

import {
  Centered,
  StyledDarkLine,
  StyledLightText,
  StyledLine,
  StyledText,
} from './ListsCreated.styles';

function ListsCreated() {
  const { createdList } = useListsContext();
  const { values, isLoading } = useBinanceSocket({
    list: createdList,
  });

  return (
    <ScreenContainer>
      <Text>Symbol | Updated Price | Best bid price | Best Ask price</Text>
      <FlashList
        ListEmptyComponent={
          isLoading ? (
            EmptyList
          ) : (
            <Centered>
              <Label>
                <Text>
                  Nenhuma cripto adicionada a lista, caso já tenha adicionado, aguarde uns segundos
                </Text>
              </Label>
            </Centered>
          )
        }
        renderItem={({ item, index }) => {
          if (index % 2 === 0)
            return (
              <StyledDarkLine>
                <StyledLightText>
                  {item.s} | {`${Number(item.h).toFixed(4) ?? '-'}`}{' '}
                  {item.b ? Number(item.b).toFixed(4) : '-'}{' '}
                  {item.a ? Number(item.a).toFixed(4) : '-'}
                </StyledLightText>
              </StyledDarkLine>
            );

          return (
            <StyledLine>
              <StyledText>
                {item.s} {Number(item.h).toFixed(4) ?? '-'}{' '}
                {item.b ? Number(item.b).toFixed(4) : '-'}{' '}
                {item.a ? Number(item.a).toFixed(4) : '-'}
              </StyledText>
            </StyledLine>
          );
        }}
        data={values}
        estimatedItemSize={100}
      />
    </ScreenContainer>
  );
}

export default ListsCreated;
