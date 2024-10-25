import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '@/components/Header';
import HeaderRightItem from '@/components/HeaderRightItem';
import { Home } from '@/screens';
import { MainRouters } from '@routes/Routers';

import { MainStackParams } from './Stacks';

const { Navigator, Screen } = createStackNavigator<MainStackParams>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={MainRouters.HOME}>
        <Screen
          name={MainRouters.HOME}
          component={Home}
          options={{
            header: () => <Header RightIcon={<HeaderRightItem />} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
