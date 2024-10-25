import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { List } from '@/components/List';
import { getData } from '@/store';
import { CryptoSymbol } from '@/types/getSymbols';

function Home() {
  const [data, setData] = useState<CryptoSymbol[] | []>([]);

  useEffect(() => {
    async function callGetData() {
      const content = await getData();
      setData(content);
    }

    callGetData();
  }, []);
  return (
    <View>
      <List symbols={data} />
    </View>
  );
}

export default Home;
