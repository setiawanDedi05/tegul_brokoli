import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';

const SettingsScreen = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.25}}
      end={{x: 0.5, y: 1}}
      colors={[Colors.primary, Colors.background]}
      angle={360}
      angleCenter={{x: 0.5, y: 0.5}}
      useAngle={true}
      style={styles.root}>
      <ScrollView>
        <Text>History</Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SettingsScreen;
