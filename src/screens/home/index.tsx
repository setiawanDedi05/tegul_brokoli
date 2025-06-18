import React from 'react';
import Lottie from 'lottie-react-native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import AnimatedTabBar from './components/AnimatedTabBar';
import BerandaScreen from '../beranda';
import { Routes } from '../../navigation/routes';
import NotaScreen from '../nota';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewNota from '../review-nota';
import HistoryScreen from '../history';
import SettingsScreen from '../setting';

const Tab = createBottomTabNavigator();
const CreateNotaStack = createNativeStackNavigator();
const CreateProductStack = createNativeStackNavigator();
const CreateNotaFlow = () => {
  return (
    <CreateNotaStack.Navigator initialRouteName={Routes.Nota} screenOptions={{headerShown: false}}>
      <CreateNotaStack.Screen name={Routes.Nota} component={NotaScreen} />
      <CreateNotaStack.Screen name={Routes.ReviewNota} component={ReviewNota} />
    </CreateNotaStack.Navigator>
  );
}

const CreateProductFlow = () => {
  return (
    <CreateProductStack.Navigator initialRouteName={Routes.products} screenOptions={{headerShown: false}}>
      <CreateProductStack.Screen name={Routes.products} component={HistoryScreen} />
    </CreateProductStack.Navigator>
  )
}
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
        component={CreateNotaFlow}
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
              source={require('../../assets/lottie/product.icon.json')}
              style={styles.iconProduct}
            />
          ),
        }}
        component={CreateProductFlow}
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
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 36,
    width: 36,
  },
  iconProduct: {
    height: 30,
    width: 30,
  },
  iconHistory: {
    height: 56,
    width: 56,
  },
});

export default HomeScreen;
