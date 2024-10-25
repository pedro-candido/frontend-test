import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { FlashList } from '@shopify/flash-list';

import Button from '@/components/atoms/Button';
import { useListsContext } from '@/context';
import { MainRouters } from '@/routes/Routers';
import { CryptoSymbol } from '@/types/getSymbols';
import EmptyList from '@components/atoms/ListEmptyComponent';
import { Container } from '@components/molecules/List/List.styles';

import { ISearchList } from './SearchList.types';

function SearchList({ symbols, textToFilter = '' }: ISearchList) {
  const { selectedItems, setSelectedItems } = useListsContext();
  const { navigate } = useNavigation();

  const [filteredSymbols, setFilteredSymbols] = useState(symbols);

  useEffect(() => {
    if (textToFilter.length !== 0) {
      const result = symbols.filter(({ symbol }) =>
        symbol.toLowerCase().includes(textToFilter.toLowerCase())
      );

      setFilteredSymbols(result);
    }

    if (textToFilter.length === 0) {
      setFilteredSymbols(symbols);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textToFilter]);

  const handlePress = (symbol: string) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(symbol)) {
        // Remove o item da lista
        return prevSelectedItems.filter((item) => item !== symbol);
      } else {
        // Adiciona o item à lista
        return [...prevSelectedItems, symbol];
      }
    });
  };

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);
  // TODO corrigir container da label
  return (
    <Container>
      <Button text="Go to cart" onPress={() => navigate(MainRouters.CART)} />
      <FlashList
        bounces={false}
        ListEmptyComponent={EmptyList}
        estimatedItemSize={200}
        renderItem={({ item }: { item: CryptoSymbol }) => {
          const isSelected = selectedItems.includes(item.symbol);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          return (
            <View>
              <Button
                type={isSelected ? 'selected' : 'select'}
                onPress={() => handlePress(item.symbol)}
                text={item.symbol}
                {...item}
              />
            </View>
          );
        }}
        data={filteredSymbols}
        numColumns={2}
        keyExtractor={(item, index) => `${item.symbol}${index}`}
        contentContainerStyle={{ padding: 20 }}
        extraData={selectedItems}
      />
    </Container>
  );
}

export { SearchList };
