/*eslint-disable*/
import React from 'react';
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Auth screen
import SplaceScreen from './src/screens/splash_Screen/Weclome_Screen';
import SignIn_Home from './src/screens/auth_Screen/SignIn_Home';
import Login_Screen from './src/screens/auth_Screen/Login_Screen';
import SignUp_Screen from './src/screens/auth_Screen/SignUp_Screen';
// import screens
import Home from './src/screens/todo_Screen/Todo_Input';
const Stack = createNativeStackNavigator();
import {StatusBar} from 'react-native'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={'#083A51'} />
      <Stack.Navigator>
        <Stack.Screen
          name="SplaceScreen"
          component={SplaceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="SignIn_Home"
        component={SignIn_Home}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name="Login_Screen"
        component={Login_Screen}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name="SignUp_Screen"
        component={SignUp_Screen}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
/*eslint-disable*/