import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";
import Splash1 from "../normal/Splash1";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Profile from "../screens/sideScreen/Profile";
import Menu from "../normal/Menu";
import Sidebar from "../screens/sideScreen/Sidebar";
import Tabs from "./Tabs";
import Layout from "./Layout";
import Details from "../normal/Details";
import ItemList from "../normal/ItemList.";
import Payment from "../screens/Payment";


const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash1" component={Splash1} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="About" component={About} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
        <Stack.Screen name="Sidebar" component={Sidebar} options={{headerShown: false}}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
        <Stack.Screen name="Layout" component={Layout} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
        <Stack.Screen name="ItemList" component={ItemList} options={{headerShown: false}}/>
        <Stack.Screen name="Payment" component={Payment} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
