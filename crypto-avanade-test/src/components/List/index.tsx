import { FlashList } from '@shopify/flash-list';

import { CryptoSymbol } from '@/types/getSymbols';
import { Container } from '@components/List/List.styles';
import Index from '@components/ListEmptyComponent';
import ListItem from '@components/ListItem';

import { IList } from './List.types';

function List({ symbols }: IList) {
  return (
    <Container>
      <FlashList
        bounces={false}
        ListEmptyComponent={Index}
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
