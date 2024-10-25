import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import HeaderItem from '@components/atoms/HeaderItem';
import { testIds } from '@constants/testIds';
import { MainStackParams } from '@routes/Stacks';

const { backButton } = testIds;

function HeaderLeftItem() {
  const { popToTop } = useNavigation<StackNavigationProp<MainStackParams>>();

  const handlePress = () => {
    popToTop();
  };

  return <HeaderItem testID={backButton} iconName={'chevron-left'} onPress={handlePress} />;
}

export default HeaderLeftItem;
