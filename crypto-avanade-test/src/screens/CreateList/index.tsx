import { useState } from 'react';
import { TextInput } from 'react-native';

import { ScreenContainer } from '@/components/atoms/ScreenContainer/index.styles';
import { SearchList } from '@/components/molecules/SearchList';
import { useListsContext } from '@/context';

function CreateList() {
  const { fullList } = useListsContext();
  const [text, setText] = useState('');

  const handleChangeText = (content: string) => {
    setText(() => content.trim());
  };

  // TODO Corrigir estilo input
  return (
    <ScreenContainer>
      <TextInput placeholder="Pesquisar" onChangeText={handleChangeText} value={text} />
      <SearchList symbols={fullList} textToFilter={text} />
    </ScreenContainer>
  );
}

export default CreateList;
