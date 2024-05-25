import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import Home from '../screens/Home';
import Tabs from '../navigation/Tabs';

const Drawer =  createDrawerNavigator();

const Menu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab" component={Tabs} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

export default Menu