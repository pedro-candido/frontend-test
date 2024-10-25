import { useNavigation } from '@react-navigation/core';

import { MainRouters } from '@/routes/Routers';
import HeaderItem from '@components/atoms/HeaderItem';

function HeaderRightItem() {
  const { navigate } = useNavigation();
  const handlePress = () => {
    navigate(MainRouters.CART);
  };

  return <HeaderItem hasMarginRight={true} iconName={'shopping-cart'} onPress={handlePress} />;
}

export default HeaderRightItem;
