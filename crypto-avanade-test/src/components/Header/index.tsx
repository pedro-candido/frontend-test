import React from 'react';

import { Logo } from '@/assets';
import { CartContainer, IconContainer, SafeContainer } from '@components/Header/Header.styles';

interface IHeader {
  RightIcon?: React.ReactNode;
  LeftIcon?: React.ReactNode;
}

function Header({ RightIcon, LeftIcon }: IHeader) {
  return (
    <SafeContainer>
      <IconContainer>{LeftIcon ?? <></>}</IconContainer>
      <Logo width={'150px'} />
      <CartContainer>
        <IconContainer>{RightIcon ?? <></>}</IconContainer>
      </CartContainer>
    </SafeContainer>
  );
}

export { Header };
