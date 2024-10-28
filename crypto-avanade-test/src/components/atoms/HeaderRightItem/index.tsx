import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainRouters } from '@/routes/Routers';
import { MainStackParams } from '@/routes/Stacks';
import HeaderItem from '@components/atoms/HeaderItem';

function HeaderRightItem() {
  const { navigate } = useNavigation<StackNavigationProp<MainStackParams>>();
  const handlePress = () => {
    navigate(MainRouters.CART);
  };

  return <HeaderItem hasMarginRight={true} iconName={'shopping-cart'} onPress={handlePress} />;
}

export default HeaderRightItem;
