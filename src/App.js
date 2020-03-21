import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Home from './Screens/Home';

function HomeScreen() {
  return <Home />;
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function DownloadScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function UserScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
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
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Busca',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="magnifier" color={color} size={size} />
          ),
        }}
        name="Busca"
        component={SettingsScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="cloud-download" color={color} size={size} />
          ),
        }}
        name="Downloads"
        component={DownloadScreen}
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

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         options={{
//           headerTransparent: true,
//           headerBackground: () => (
//             <Image source={logo} style={{width: 40, height: 40}} />
//           ),
//         }}
//         name="Home"
//         component={HomeScreen}
//       />
//       <Stack.Screen name="Notifications" component={SettingsScreen} />
//       <Stack.Screen name="Profile" component={DownloadScreen} />
//       <Stack.Screen name="Settings" component={UserScreen} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
