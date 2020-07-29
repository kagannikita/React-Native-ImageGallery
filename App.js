import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import store from './src/redux/store';
const Stack = createStackNavigator();
const GalleryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImageGallery" component={MainScreen} />
      <Stack.Screen name="FullImage" component={PhotoScreen} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <GalleryStack />
      </Provider>
    </NavigationContainer>
  );
}
