import { TextProps } from 'react-native';

import { Text } from '@components/atoms/Label/Label.styles';

function Label(props: TextProps) {
  return <Text {...props} />;
}

export default Label;
