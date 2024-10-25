import { useEffect, useState } from 'react';

import { List } from '@/components/molecules/List';
import { getData } from '@/store';
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
      <Title>Lista Principal</Title>
      <List symbols={data} />
    </Container>
  );
}

export default FullList;
