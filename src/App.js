import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import rootReducer from './reducers/index'
import {MyStack} from './routes'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(rootReducer)

export default function App() {
  return (
   <Provider store={store}>
     <NavigationContainer>
        <MyStack />
     </NavigationContainer>
   </Provider>
  );
}
