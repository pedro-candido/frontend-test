import { NavigationProp, useNavigation } from '@react-navigation/native';

import Button from '@/components/atoms/Button';
import { MainRouters } from '@/routes/Routers';
import { MainStackParams } from '@/routes/Stacks';

import { Container } from './Home.styles';

function Home() {
  const { navigate } = useNavigation<NavigationProp<MainStackParams>>();

  function handleNavigate(route: keyof MainStackParams) {
    navigate(route);
  }

  return (
    <Container>
      <Button text="Criar uma lista" />
      <Button text="Listas Criadas" />
      <Button
        onPress={() => handleNavigate(MainRouters.FULL_LIST)}
        text="Verificar lista completa"
      />
    </Container>
  );
}

export default Home;
