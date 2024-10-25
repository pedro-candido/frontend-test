import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { getData } from '@/store';

function Home() {
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}

export default Home;
