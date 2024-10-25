import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderLeftItem from '@/components/atoms/HeaderLeftItem';
import HeaderRightItem from '@/components/atoms/HeaderRightItem';
import { Header } from '@/components/molecules/Header';
import { Home } from '@/screens';
import FullList from '@/screens/FullList';
import { MainRouters } from '@routes/Routers';

import { MainStackParams } from './Stacks';

const { Navigator, Screen } = createStackNavigator<MainStackParams>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={MainRouters.HOME}
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Screen name={MainRouters.HOME} component={Home} />
        <Screen
          name={MainRouters.FULL_LIST}
          component={FullList}
          options={{
            header: () => <Header LeftIcon={<HeaderLeftItem />} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
