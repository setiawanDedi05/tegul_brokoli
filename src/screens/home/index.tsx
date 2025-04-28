import React from 'react';
import Lottie from 'lottie-react-native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../constants/colors';
import AnimatedTabBar from './components/AnimatedTabBar';
import BerandaScreen from '../beranda';
import { Routes } from '../../navigation/routes';
import NotaScreen from '../nota';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.Beranda} tabBar={props => <AnimatedTabBar {...props} />}>
      <Tab.Screen
        name={Routes.Beranda}
        options={{
          headerShown: false,
          // @ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('../../assets/lottie/home.icon.json')}
              style={styles.icon}
            />
          ),
        }}
        component={BerandaScreen}
      />
      <Tab.Screen
        name={Routes.Nota}
        options={{
          headerShown: false,
          // @ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('../../assets/lottie/upload.icon.json')}
              style={styles.icon}
            />
          ),
        }}
        component={NotaScreen}
      />
      <Tab.Screen
        name="Chat"
        options={{
          headerShown: false,
          // @ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('../../assets/lottie/chat.icon.json')}
              style={styles.icon}
            />
          ),
        }}
        component={PlaceholderScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
          // @ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('../../assets/lottie/settings.icon.json')}
              style={styles.icon}
            />
          ),
        }}
        component={PlaceholderScreen}
      />
    </Tab.Navigator>
  );
};

const PlaceholderScreen = () => {
  return <View style={{flex: 1, backgroundColor: Colors.primary}} />;
};

const styles = StyleSheet.create({
  icon: {
    height: 36,
    width: 36,
  },
});

export default HomeScreen;
