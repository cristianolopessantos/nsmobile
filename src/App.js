import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider} from '@ui-kitten/components'
import rootReducer from './reducers/index'
import {MyStack} from './routes'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { mapping, light as lightTheme } from '@eva-design/eva';

const store = createStore(rootReducer)

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Provider store={store}>
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>
    </Provider>
    </ApplicationProvider>
  );
}
