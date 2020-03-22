import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';

function SignInScreen({navigation}){
  return <SignIn navigation={navigation} ></SignIn>
}

function SignUpScreen({navigation}){
  return <SignUp navigation={navigation}></SignUp>
}

function MyStack({navigation}) {
  return (
    <Stack.Navigator 
      initialRouteName={SignIn}
    >
      <Stack.Screen name="Voltar" options={{
          headerShown: false
        }}component={SignInScreen}/>
      <Stack.Screen name="SignUp" options={{
          title: 'Criar conta gratuita',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#171b1e',
            borderBottomColor: 'red'
          }
          
        }}component={SignUpScreen} />
    
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
