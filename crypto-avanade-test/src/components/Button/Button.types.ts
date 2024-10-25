import { PressableProps } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface IButtonProps extends PressableProps {
  type?: 'primary' | 'secondary';
  size?: number;
  text?: string;
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
}
