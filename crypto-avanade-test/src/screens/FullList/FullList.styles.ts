import styled from 'styled-components/native';

import Label from '@/components/atoms/Label';

export const Container = styled.View`
  height: 95%;
  width: 100%;
  justify-content: center;
`;

export const ContainerWithoutItems = styled.View`
  align-items: center;
  margin-top: 10%;
`;

export const Title = styled(Label)`
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
`;