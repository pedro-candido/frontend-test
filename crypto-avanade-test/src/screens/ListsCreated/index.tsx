import { useState } from 'react';
import { Text, TextInput } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { ScreenContainer } from '@/components/atoms/ScreenContainer/index.styles';
import { useListsContext } from '@/context';

function ListsCreated() {
  const { lists } = useListsContext();
  const [text, setText] = useState('');

  const handleChangeText = (content: string) => {
    setText(() => content.trim());
  };

  // TODO Corrigir estilo input
  return (
    <ScreenContainer>
      <TextInput placeholder="Pesquisar" onChangeText={handleChangeText} value={text} />
      <FlashList
        renderItem={({ item }) => <Text>Hello World {item}</Text>}
        data={lists}
        estimatedItemSize={100}
      />
    </ScreenContainer>
  );
}

export default ListsCreated;
