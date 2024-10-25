import { useEffect, useState } from 'react';

import { getData } from '@/api/utils';
import { ScreenContainer } from '@/components/atoms/ScreenContainer/index.styles';
import { List } from '@/components/molecules/List';
import { CryptoSymbol } from '@/types/getSymbols';

import { Title } from './FullList.styles';

function FullList() {
  const [data, setData] = useState<CryptoSymbol[] | []>([]);

  useEffect(() => {
    async function callGetData() {
      const content = await getData();
      setData(content);
    }

    callGetData();
  }, []);
  return (
    <ScreenContainer>
      <Title>Lista com todos simbolos</Title>
      <List symbols={data} />
    </ScreenContainer>
  );
}

export default FullList;
