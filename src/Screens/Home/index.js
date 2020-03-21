import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import Present from './Present';
import Series from './Series';

function HomeScreen({navigation}) {
  return <Present />;
}

function RandomScreen() {
  return <Series />;
}

function MyTabs() {
  return (
    <Tab.Navigator
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
