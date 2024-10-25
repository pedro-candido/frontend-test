import { useEffect } from 'react';

import { callApiIfNecessary } from '@/api/utils';
import { ScreenContainer } from '@/components/atoms/ScreenContainer/index.styles';
import { List } from '@/components/molecules/List';
import { useListsContext } from '@/context';

import { Title } from './FullList.styles';

function FullList() {
  const { fullList } = useListsContext();

  return (
    <ScreenContainer>
      <Title>Lista com todos simbolos</Title>
      <List symbols={fullList} />
    </ScreenContainer>
  );
}

export default FullList;
