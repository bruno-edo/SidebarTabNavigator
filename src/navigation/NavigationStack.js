import React from 'react';

import { createAppContainer } from 'react-navigation';

import { createSidebarNavigator } from '../tabs';
import { Home, RedScreen } from '../screens';


const sidebarNavigator = createSidebarNavigator(
  {
    Home: {
      screen: Home,
      params: {
        icon: 'home',
        tabName: 'Home',
      },
    },
    Red : {
      screen: RedScreen,
        params: {
            icon: 'inbox',
            tabName: 'Email Inbox',
        }
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(sidebarNavigator);
