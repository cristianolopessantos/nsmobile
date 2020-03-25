import React, {Component} from 'react';
import {View,Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Present from './Screens/Present';
import SeriesList from './Screens/Series';
import AllSeries from './Screens/Series/allSeries';
import Profile from './Screens/Profile';
import Search from './Screens/Search';
import Details from './Screens/DetailsSeries'


function SignInScreen({navigation}){
  return <SignIn navigation={navigation} ></SignIn>
}

function SignUpScreen({navigation}){
  return <SignUp navigation={navigation}></SignUp>
}

function HomeScreen({navigation}){
  return <Home navigation={navigation}></Home>
}


function PresentScreen({navigation}) {
  return (
     <Present />
  )
}

function SearchScreen({props}) {
  return (
    <Search props={props}/>
  );
}

function UserScreen({navigation}) {
  return (
   <Profile navigation={navigation}></Profile>
  );
}

function SeriesScreens({navigation}){
  return(
    <SeriesList navigation={navigation}></SeriesList>
  );
}

function AllseriesScreens({navigation}){
  return(
   <AllSeries navigation={navigation}></AllSeries>
  );
}

function DetailsScreen({navigation,route}){
  return (
    <Details route={route} navigation={navigation}/>
  )
}

const Stack = createStackNavigator();
export function MyStack({navigation}) {
  return (
    <Stack.Navigator 
    initialRouteName={SignIn}
    >
      <Stack.Screen name="Voltar" options={{
        headerShown: false
      }}component={SignInScreen}/>
      <Stack.Screen name="SignUp" options={{
        title: 'Criar conta gratuita',
        headerTransparent: true,
        headerTintColor: 'white',                
      }}component={SignUpScreen} />
      <Stack.Screen name="Home" options={{
        headerShown: false
      }}component={HomeScreen}/>

      <Stack.Screen name="Detalhes" options={{
          headerTransparent: true,
          headerTintColor: 'white', 
          headerStyle: {
            backgroundColor: '#000',
          },     
      }}component={DetailsScreen}/>
        
    
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        activeTintColor: '#4aa5da',
        inactiveTintColor: '#808080',
        style: {
          backgroundColor: 'rgba(23, 27, 30, 1)',
          borderTopColor: 'rgba(23, 27, 30, 1)',
        },
        tabStyle: {
          elevation: 3,
        },
        labelStyle: {
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="home" color={color} size={size} />
          ),
        }}
        name="Present"
        component={PresentScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="magnifier" color={color} size={size} />
          ),
        }}
        name="Busca"
        component={SearchScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Minha área',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="user" color={color} size={size} />
          ),
        }}
        name="Minha área"
        component={UserScreen}
      />
    </Tab.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();
export function MyTopTabs() {
  return (
    <TopTab.Navigator
      initialRouteName="Pagina inicial"
      tabBarOptions={{
        indicatorStyle: {
          borderBottomColor: '#4aa5da',
          borderBottomWidth: 2,
        },
        activeTintColor: '#4aa5da',
        inactiveTintColor: '#808080',
        labelStyle: {fontSize: 15, fontWeight: 'bold', lineHeight: 80},

        style: {backgroundColor: '#171b1e', height: 80},
      }}>
      <TopTab.Screen name="Pagina inicial" component={SeriesScreens} />
      <TopTab.Screen name="Séries" component={AllseriesScreens} />
    </TopTab.Navigator>
  );
}

const TopTabProfile = createMaterialTopTabNavigator();

export function MyTopTabsProfile() {
  return (
    <TopTabProfile.Navigator
      initialRouteName="Minha Conta"
      tabBarOptions={{
        indicatorStyle: {
          borderBottomColor: '#4aa5da',
          borderBottomWidth: 2,
        },
        activeTintColor: '#4aa5da',
        inactiveTintColor: '#808080',
        labelStyle: {fontSize: 15, fontWeight: 'bold', lineHeight: 80},

        style: {backgroundColor: '#171b1e', height: 80},
      }}>
      <TopTabProfile.Screen name="Minha Conta" component={SeriesScreens} />
      <TopTabProfile.Screen name="Segurança" component={AllseriesScreens} />
    </TopTabProfile.Navigator>
  );
}