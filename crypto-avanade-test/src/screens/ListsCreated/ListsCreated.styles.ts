import styled from 'styled-components/native';

import { css } from 'styled-components';

import Label from '@/components/atoms/Label';

const commonStyle = css`
  padding: 10px;
`;

export const Centered = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Label)`
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
`;

export const StyledLine = styled.View`
  background-color: #f0f0f5; /* Cor de fundo clara */
  ${commonStyle}
`;

export const StyledText = styled.Text`
  color: #333; /* Texto em cor escura */
  font-size: 16px;
`;

export const StyledDarkLine = styled.View`
  background-color: #333; /* Cor de fundo escura */
  ${commonStyle}
`;

export const StyledLightText = styled.Text`
  color: #f5f5f5; /* Texto em cor clara */
  font-size: 16px;
`;
