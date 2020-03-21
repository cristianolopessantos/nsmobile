import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import {createStackNavigator} from '@react-navigation/stack';
import logo from '../../assets/images/netgra.png';

import Present from './Present';
import Series from './Series';
const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return <Present />;
}

function RandomScreen() {
  return <Series />;
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Jogadores"
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
      <Tab.Screen name="Pagina inicial" component={HomeScreen} />
      <Tab.Screen name="Séries" component={RandomScreen} />
    </Tab.Navigator>
  );
}

export default class Home extends Component {
  render() {
    return <MyTabs />;
  }
}
