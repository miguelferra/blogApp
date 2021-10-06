import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import indexScreen from './src/screens/indexScreen';
import showScreen from './src/screens/showScreen';
import { Provider } from './src/context/BlogContext';
import createScreen from './src/screens/createScreen';
import editScreen from './src/screens/editScreen';
 
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Blogs" component={indexScreen} />
        <Stack.Screen name="Show" component={showScreen} />
        <Stack.Screen name="Create" component={createScreen} />
        <Stack.Screen name="Edit" component={editScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return(
    <Provider>
      <App />
    </Provider>
  )
};
/* const navigator = createStackNavigator(
  {
    Index: indexScreen
  },
  {
    initialRouteName: 'index',
    defaltNavigationOptions: {
      title: 'Blogs'
    }
  }
) */

/* export default createAppContainer(navigator); */