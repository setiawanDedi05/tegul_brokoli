import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../../constants/theme';
import DeviceInfo from 'react-native-device-info';

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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}>
        <View
          style={{
            height: 160,
            width: 160,
            backgroundColor: Colors.background,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...THEME.shadow,
          }}>
          <Icon name="person" size={80} />
        </View>
        <View
          style={{
            display: 'flex',
            gap: 10,
            width: '100%',
            backgroundColor: Colors.background,
            borderRadius: 16,
            paddingVertical: 10,
          }}>
          <View
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              borderBottomWidth: 2,
              borderBottomColor: Colors.primary,
            }}>
            <Text style={{color: Colors.primary}}>Ubah Profile</Text>
            <Icon name="arrow-forward" color={Colors.primary} size={24} />
          </View>
          <View
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              borderBottomWidth: 2,
              borderBottomColor: Colors.primary,
            }}>
            <Text style={{color: Colors.primary}}>Bahasa</Text>
            <Icon name="arrow-forward" color={Colors.primary} size={24} />
          </View>
          <View
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: Colors.primary}}>Logout</Text>
            <Icon name="arrow-forward" color={Colors.primary} size={24} />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{fontSize: 20, fontWeight: 'bold', color: Colors.background}}>
          Tegeul Brokoli
        </Text>
        <Text style={{fontSize: 12, color: Colors.background}}>
          Versi {DeviceInfo.getVersion()}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 20,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default SettingsScreen;
