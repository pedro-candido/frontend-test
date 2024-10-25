import { NavigationProp, useNavigation } from '@react-navigation/native';

import Button from '@/components/atoms/Button';
import { ScreenContainer } from '@/components/atoms/ScreenContainer/index.styles';
import { MainRouters } from '@/routes/Routers';
import { MainStackParams } from '@/routes/Stacks';

function Home() {
  const { navigate } = useNavigation<NavigationProp<MainStackParams>>();

  function handleNavigate(route: keyof MainStackParams) {
    navigate(route);
  }

  return (
    <ScreenContainer>
      <Button text="Criar uma lista" />
      <Button text="Listas Criadas" />
      <Button
        onPress={() => handleNavigate(MainRouters.FULL_LIST)}
        text="Verificar lista completa"
      />
    </ScreenContainer>
  );
}

export default Home;
