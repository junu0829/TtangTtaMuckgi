import React, {component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigater = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartPage} />
      <Stack.Screen name="Game" component={GamePage} />
    </Stack.Navigator>
  );
}

export default StackNavigator;