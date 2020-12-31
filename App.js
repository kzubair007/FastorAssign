/* eslint-disable */
import React from "react";
import {Text, View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {TextInput,Card,List} from 'react-native-paper';
import Login from './Screens/Login'
import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import OTP from "./Screens/OTP"
import Detail from './Screens/Detail';

const Tab= createBottomTabNavigator()

const App= ()=>{
  return(
      <>
        <StatusBar barStyle= "dark-content" backgroundColor= "#00aaff"/>
        <NavigationContainer>
          <Tab.Navigator
              screenOptions={({route})=>({
                tabBarIcon: ({color})=>{
                  let iconName;
                  if(route.name== "OTP")
                  {
                    iconName= "lock"
                  }
                  else if(route.name== "Login")
                  {
                    iconName= "login"
                  }
                  else if(route.name== "Home")
                  {
                    iconName= "home"
                  }
                  else if(route.name== "Detail")
                  {
                    iconName= "food"
                  }
                  return <MaterialCommunityIcons name={iconName} size={25} color={color} />
                }
              })}
              tabBarOptions={{
                activeTintColor: "#00aaff",
                inactiveTintColor: "gray"
              }}
          >
            <Tab.Screen name={"Login"} component={Login}/>
            <Tab.Screen name={"OTP"} component={OTP}/>
            <Tab.Screen name={"Home"} component={Home}/>
            <Tab.Screen name={"Detail"} component={Detail}/>
          </Tab.Navigator>
        </NavigationContainer>
      </>

  )
}

export default App;
