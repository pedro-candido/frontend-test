import styled from 'styled-components/native';


export const IconContainer = styled.View`
  width: 50px;
  justify-content: center;
`;

export const SafeContainer = styled.SafeAreaView`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartContainer = styled.View`
  justify-content: center;
  position: 'relative';
`;

export const RedPoint = styled.View`
  background-color: #e00;
  right: 40%;
  top: 35%;
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 100px;
`;
