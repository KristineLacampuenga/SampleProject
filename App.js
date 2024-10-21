import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MicrophonePage from './screens/MicrophonePage';
import RecordingPage from './screens/RecordingPage';
import BluetoothPage from './screens/BluetoothPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Microphone">
        <Stack.Screen name="Microphone" component={MicrophonePage} />
        <Stack.Screen name="Recording" component={RecordingPage} />
        <Stack.Screen name="Bluetooth" component={BluetoothPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
