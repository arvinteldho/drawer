import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './src/Login';
import Flexbox from './src/Flexbox';
import Home from './src/Drawer/Home';
import Profile from './src/Drawer/Profile';
import DrawerContent from './src/DrawerContent';
import Setting from './src/Drawer/setting';
import Records from './src/Drawer/Records';
import Refund from './src/Drawer/Refund';
import Wallet from './src/Drawer/Wallet';
import Help from './src/Drawer/Help';
import Aboutus from './src/Drawer/aboutus';
import Cart from './src/Tab/cart';
import Category from './src/Tab/category';
import Order from './src/Tab/order';
import Search from './src/Tab/search';
import Call from './src/BottomTab/call';
import Chat from './src/BottomTab/chat';
import Status from './src/BottomTab/status';
const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();
const Tab=createMaterialTopTabNavigator();
const BottomTab=createBottomTabNavigator();
function Mystack(){
  return(
    <Stack.Navigator>
    <Stack.Screen  name='Login'
    component={Login}
    options={{headerShown:false}}/>
    <Stack.Screen
    name='Flexbox'
    component={Flexbox}
    options={{headerShown:false}}/>
    <Stack.Screen
    name='Drawer'
    component={MyDrawer}
    options ={{headerShown:false}}/>
    <Stack.Screen
    name='Tab'
    component={MyTab}
    options={{headerShown:false}}/>
      <Stack.Screen
      name='BottomTab'
      component={MyBottomTab}/>
    </Stack.Navigator>
  )
}
function MyDrawer(){
  return(
  <Drawer.Navigator
  drawerContent={(props)=><DrawerContent{...props}/>}>
  <Drawer.Screen
  name='Home'
  component={Home}/>
  <Drawer.Screen
  name='Profile'
  component={Profile}/>
  <Drawer.Screen
  name='Wallet'
  component={Wallet}/>
  <Drawer.Screen
  name='Records'
  component={Records}/>
  <Drawer.Screen
  name='Refund'
  component={Refund}/>
  <Drawer.Screen
  name='Setting'
  component={Setting}/>
  <Drawer.Screen 
  name="Aboutus"
  component={Aboutus}/>
  <Drawer.Screen
  name='Help'
  component={Help}/>
  </Drawer.Navigator>
  )
}
function MyTab(){
  return(
  <Tab.Navigator
  screenOptions={{
    tabBarLabelStyle:{fontSize:12},
    tabBarItemStyle:{width:100},
    tabBarStyle:{backgroundColor:'white'}
  }}>
  <Tab.Screen
  name='Cart'
  component={Cart}
  options={{
    tabBarIcon:({focused})=>
    focused?<Icon name='shopping-cart' size={24} color='blue'/>:<Icon name='shopping-cart' size={24} color='gray'/> 
  }}/>
  <Tab.Screen
  name='Category'
  component={Category}
  options={{
    tabBarActiveTintColor:'blue',
    tabBarInactiveTintColor:'gray',
    tabBarIcon:({focused})=> 
    focused?<Icon name='category' size={24} color='blue'/>:<Icon name='category' size={24}color='gray'/>
  }}/>
  <Tab.Screen
  name='Order'
  component={Order}
  options={{
    tabBarActiveTintColor:'blue',
    tabBarInactiveTintColor:'gray',
    tabBarIcon:({focused})=>
    focused?<Icon name='shopping-bag' size={24} color='blue'/>:<Icon name='shopping-bag' size={24} color='gray'/>
  }}/>
  <Tab.Screen
  name='Search'
  component={Search}
  options={{
    tabBarActiveTintColor:'blue',
    tabBarInactiveTintColor:'gray',
    tabBarIcon:({focused})=>
    focused?<Icon name='search' size={24} color='blue'/>:<Icon name='search' size={24} color='gray'/>
  }}/>
  </Tab.Navigator>
  )
}
function MyBottomTab(){
  return(
    <BottomTab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      tabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'white'}
    }}>
    <BottomTab.Screen
    name='Call'
    component={Call}
    options={{
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'gray',
      tabBarIcon:({focused})=>
      focused?<Icon name='call' size={24} color='green'/>:<Icon name='call' size={24} color='gray'/>
    }}/>
    <BottomTab.Screen
    name='Chat'
    component={Chat}
    options={{
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'gray',
      tabBarIcon:({focused})=>
      focused?<Icon name='chat' size={24} color='green'/>:<Icon name='chat' size={24} color='gray'/>
    }}/>
    <BottomTab.Screen
    name='Status'
    component={Status}
    options={{
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'gray',
      tabBarIcon:({focused})=>
      focused?<Icon name='timelapse' size={24} color='green'/>:<Icon name='timelapse' size={24} color='gray'/>
    }}/>
    </BottomTab.Navigator>
  )
}
export default function App(){
  return(
    <NavigationContainer>
    <MyDrawer/>
    </NavigationContainer>
  )
}