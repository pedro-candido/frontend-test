import { PressableProps } from 'react-native';

import styled, { css } from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type TPressableProps = {
  type: 'primary' | 'secondary' | 'select' | 'selected';
  size?: number;
} & PressableProps;

export const PressableButton = styled.Pressable<TPressableProps>`
  padding: 8px;
  border-radius: 5px;
  margin-top: 5%;
  transition: 0.4s;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${({ type, size }) => css`
    ${type === 'primary' &&
    css`
      background-color: #3498db;
      color: #fff;
    `}

    ${type === 'secondary' &&
    css`
      background-color: #2ecc71;
      color: #fff;
      border: 2px solid #27ae60;
    `}

    ${type === 'select' &&
    css`
      width: ${size ? `${size}px` : 'auto'};
      background-color: transparent;
      border: 1px solid #bdc3c7;
    `}

    ${type === 'selected' &&
    css`
      background-color: #3498db;
      color: #0c0c0c;
      border: 2px solid #3498db;
    `}
  `}
`;

export const Title = styled.Text<TPressableProps>`
  font-family: 'Gabarito-Bold';
  color: ${({ type }) => {
    switch (type) {
      case 'primary':
        return '#fff'; // Cor para o título primário
      case 'secondary':
        return '#fff'; // Cor para o título secundário
      case 'select':
        return '#545454'; // Cor para o título selecionado
      case 'selected':
        return '#fff'; // Cor para o título quando selecionado
      default:
        return '#000'; // Cor padrão
    }
  }};
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: #ffffff;
  font-size: 18px;
`;
