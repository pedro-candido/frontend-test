import { useEffect, useState } from 'react';

import { getData } from '@/api/utils';
import { List } from '@/components/molecules/List';
import { CryptoSymbol } from '@/types/getSymbols';

import { Container, Title } from './FullList.styles';

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
    <Container>
      <Title>Lista com todos simbolos</Title>
      <List symbols={data} />
    </Container>
  );
}

export default FullList;
