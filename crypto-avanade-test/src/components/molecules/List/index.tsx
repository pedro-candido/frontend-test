import { FlashList } from '@shopify/flash-list';

import { CryptoSymbol } from '@/types/getSymbols';
import EmptyList from '@components/atoms/ListEmptyComponent';
import ListItem from '@components/atoms/ListItem';
import { Container } from '@components/molecules/List/List.styles';

import { IList } from './List.types';

function List({ symbols }: IList) {
  return (
    <Container>
      <FlashList
        bounces={false}
        ListEmptyComponent={EmptyList}
        estimatedItemSize={200}
        renderItem={({ item }: { item: CryptoSymbol }) => <ListItem {...item} />}
        data={symbols}
        numColumns={2}
        contentContainerStyle={{ padding: 20 }}
      />
    </Container>
  );
}

export { List };
