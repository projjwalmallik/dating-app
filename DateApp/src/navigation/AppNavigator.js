import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
// Import other screens as needed

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Sign Up'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
