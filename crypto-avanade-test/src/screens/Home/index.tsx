import { useEffect } from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import { callApiIfNecessary } from '@/api/utils';
import Button from '@/components/atoms/Button';
import { useListsContext } from '@/context';
import { MainRouters } from '@/routes/Routers';
import { MainStackParams } from '@/routes/Stacks';

import { Container } from './Home.styles';

function Home() {
  const { setFullList, fullList } = useListsContext();

  const { navigate } = useNavigation<NavigationProp<MainStackParams>>();
  useEffect(() => {
    if (fullList.length === 0) {
      callApiIfNecessary(setFullList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullList.length]);

  return (
    <Container>
      <Button onPress={() => navigate(MainRouters.CREATE_LIST)} text="Criar uma lista" />
      <Button onPress={() => navigate(MainRouters.LISTS_CREATED)} text="Listas Criadas" />
      <Button onPress={() => navigate(MainRouters.FULL_LIST)} text="Verificar lista completa" />
    </Container>
  );
}

export default Home;
