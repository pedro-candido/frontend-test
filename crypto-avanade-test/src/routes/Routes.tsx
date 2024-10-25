import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@/screens';
import { Routers, NavigationParams } from '@routes/Routers';

const { Navigator, Screen } = createStackNavigator<NavigationParams>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Routers.HOME}>
        <Screen name={Routers.HOME} component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
