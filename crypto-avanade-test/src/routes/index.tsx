import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderLeftItem from '@/components/atoms/HeaderLeftItem';
import HeaderRightItem from '@/components/atoms/HeaderRightItem';
import { Header } from '@/components/molecules/Header';
import { Home } from '@/screens';
import Cart from '@/screens/Cart';
import CreateList from '@/screens/CreateList';
import FullList from '@/screens/FullList';
import ListsCreated from '@/screens/ListsCreated';
import { MainRouters } from '@routes/Routers';

import { MainStackParams } from './Stacks';

const { Navigator, Screen } = createStackNavigator<MainStackParams>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={MainRouters.HOME}
        screenOptions={{
          header: () => <Header RightIcon={<HeaderRightItem />} />,
        }}
      >
        <Screen
          name={MainRouters.CART}
          component={Cart}
          options={{
            header: () => <Header LeftIcon={<HeaderLeftItem />} RightIcon={null} />,
          }}
        />
        <Screen name={MainRouters.HOME} component={Home} />
        <Screen
          name={MainRouters.FULL_LIST}
          component={FullList}
          options={{
            header: () => <Header LeftIcon={<HeaderLeftItem />} />,
          }}
        />
        <Screen
          name={MainRouters.LISTS_CREATED}
          component={ListsCreated}
          options={{
            header: () => <Header LeftIcon={<HeaderLeftItem />} />,
          }}
        />
        <Screen
          name={MainRouters.CREATE_LIST}
          component={CreateList}
          options={{
            header: () => <Header LeftIcon={<HeaderLeftItem />} RightIcon={<HeaderRightItem />} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
