import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home';
import Login from '../screens/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
  )
}

export default DrawerNavigation