import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from '../screens/Main';
import Sidebar from './Sidebar';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props)=>{<Sidebar {...props}/>}}>
      <Drawer.Screen name='Main' component={Main} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator