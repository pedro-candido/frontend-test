import HeaderItem from '@components/atoms/HeaderItem';

function HeaderRightItem() {
  const handlePress = () => {};

  return <HeaderItem hasMarginRight={true} iconName={'bars'} onPress={handlePress} />;
}

export default HeaderRightItem;
