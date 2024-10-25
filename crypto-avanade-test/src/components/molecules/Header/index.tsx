import React from 'react';

import { Logo } from '@/assets';
import { useListsContext } from '@/context';
import {
  CartContainer,
  IconContainer,
  RedPoint,
  SafeContainer,
} from '@components/molecules/Header/Header.styles';

interface IHeader {
  RightIcon?: React.ReactNode;
  LeftIcon?: React.ReactNode;
}

function Header({ RightIcon, LeftIcon }: IHeader) {
  const { selectedItems } = useListsContext();

  return (
    <SafeContainer>
      <IconContainer>{LeftIcon ?? <></>}</IconContainer>
      <Logo width={'150px'} />
      <CartContainer>
        <IconContainer>{RightIcon ?? <></>}</IconContainer>
        {RightIcon && selectedItems.length > 0 && <RedPoint />}
      </CartContainer>
    </SafeContainer>
  );
}

export { Header };
