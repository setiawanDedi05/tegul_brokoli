/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import LoginScreen from './screens/login';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import {Routes} from './navigation/routes';
import {Colors} from './constants/colors';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {requestPermissions} from './utils/permission';
import auth from '@react-native-firebase/auth';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {IColors} from 'react-native-alert-notification/lib/typescript/service';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const colorsToast: IColors = {
    label: Colors.background,
    card: Colors.primary,
    overlay: Colors.primary,
    success: Colors.primary,
    danger: Colors.failed,
    warning: Colors.secondary,
    info: Colors.secondary,
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('user logged in : ', user);
      } else {
        console.log('User not logged in');
      }
    });

    return subscriber;
  }, []);

  useEffect(() => {
    console.log('Komponen dimuat, meminta izin...');
    // requestPermissions.postNotification().then(result => console.log({result}));
    // requestPermissions.writeData();
    requestPermissions.camera();
  }, []);

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
        {/*colors[lightTHeme, darkTheme] */}
        <AlertNotificationRoot colors={[colorsToast, colorsToast]}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={Colors.secondary}
            showHideTransition={'fade'}
          />
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
            </Stack.Navigator>
          </NavigationContainer>
        </AlertNotificationRoot>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
