/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import LoginScreen from './screens/login';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import {Routes} from './navigation/routes';
import {Colors} from './constants/colors';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ReviewNota from './screens/review-nota';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      RNBootSplash.hide({fade: true});
    };
    init();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, padding: 0}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Routes.Login}
            screenOptions={{
              contentStyle: {backgroundColor: Colors.background},
            }}>
            <Stack.Screen
              name={Routes.Login}
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Routes.Home}
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Routes.ReviewNota}
              component={ReviewNota}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
