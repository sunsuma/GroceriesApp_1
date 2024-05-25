import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Profile from '../screens/sideScreen/Profile';
import Cart from '../screens/Cart';
import Wish from '../screens/Wish';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}
        options={{ 
          tabBarLabel: "Home",
          headerShown:false,
          tabBarIcon:({focused})=>(
            <Image source={require('../../assets/icon1.png')} size={40} tintColor={focused? '#55AB60': 'black'}/>
          )
          }}
      />
      <Tab.Screen name='Explore' component={Explore}
        options={{ 
          tabBarLabel: "Explore",
          headerShown: false, 
          tabBarIcon:({focused, color})=>(
            <Image source={require('../../assets/icon2.png')} size={40} tintColor={focused? '#55AB60': 'black'} />
          )
          }}
      />
      <Tab.Screen name='Cart' component={Cart}
        options={{ 
          tabBarLabel: "Cart",
          headerShown: false, 
          tabBarIcon:({focused, color})=>(
            <Image source={require('../../assets/icon3.png')} size={40} tintColor={focused? '#55AB60': 'black'} />
          )
          }}
      />
      <Tab.Screen name='Wish' component={Wish}
        options={{ 
          tabBarLabel: "Wish",
          headerShown: false, 
          tabBarIcon:({focused, color})=>(
            <Image source={require('../../assets/icon4.png')} size={40} tintColor={focused? '#55AB60': 'black'} />
          )
          }}
      />
      <Tab.Screen name='Profile' component={Profile}
      
        options={{ 
          tabBarLabel: "Profile",
          headerShown: false, 
          tabBarIcon:({focused, color})=>(
            <Image source={require('../../assets/icon5.png')} size={40} tintColor={focused? '#55AB60': 'black'} />
          )
          }}
      />
    </Tab.Navigator>
  )
}

export default Tabs