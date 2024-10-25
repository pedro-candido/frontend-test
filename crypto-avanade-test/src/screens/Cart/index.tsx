import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import Button from '@/components/atoms/Button';
import { useListsContext } from '@/context';
import { MainRouters } from '@/routes/Routers';

import { Container, ContainerWithoutItems, Title } from './Cart.styles.ts';
import { AddedCrypto } from '../../components/atoms/AddedCrypto';

function Cart() {
  const { selectedItems, setLists, setSelectedItems } = useListsContext();
  const { navigate } = useNavigation();

  const handlePress = () => {
    setLists(selectedItems);

    setSelectedItems([]);

    navigate(MainRouters.HOME);
  };

  if (selectedItems.length === 0) {
    return (
      <ContainerWithoutItems>
        <Title>Ops, parece que você não escolheu nenhuma cripto</Title>
      </ContainerWithoutItems>
    );
  }
  return (
    <Container>
      <FlashList
        bounces={false}
        estimatedItemSize={200}
        renderItem={({ item }: { item: string }) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          return (
            <View>
              <AddedCrypto symbol={item} />
            </View>
          );
        }}
        data={selectedItems}
        numColumns={2}
        keyExtractor={(item, index) => `${item}${index}`}
      />

      <Button text="Criar lista" onPress={handlePress} />
    </Container>
  );
}

export default Cart;
