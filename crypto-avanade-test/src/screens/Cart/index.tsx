import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';

import Button from '@/components/atoms/Button';
import { useListsContext } from '@/context';
import { MainRouters } from '@/routes/Routers';
import { MainStackParams } from '@/routes/Stacks.js';

import { Container, ContainerWithoutItems, Title } from './Cart.styles';
import { AddedCrypto } from '../../components/atoms/AddedCrypto';

function Cart() {
  const { selectedItems, setCreatedList, setSelectedItems } = useListsContext();
  const { navigate } = useNavigation<StackNavigationProp<MainStackParams>>();

  const handlePress = () => {
    setCreatedList(selectedItems);

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
