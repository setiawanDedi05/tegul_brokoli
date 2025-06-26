import React, {useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../../constants/theme';
import DeviceInfo from 'react-native-device-info';
import BottomDrawer, {
  BottomDrawerMethods,
} from 'react-native-animated-bottom-drawer';
import auth from '@react-native-firebase/auth';
import {NavigationProp} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';

const SettingsScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const changeProfileDrawerRef = useRef<BottomDrawerMethods>(null);
  const changeLanguageDrawerRef = useRef<BottomDrawerMethods>(null);
  const logoutDrawerRef = useRef<BottomDrawerMethods>(null);

  // Fungsi untuk logout
  const signOut = async () => {
    try {
      await auth().signOut();
      navigation.reset({index: 0, routes: [{name: Routes.Login}]});
      console.log('User signed out!');
      logoutDrawerRef.current?.close();
    } catch (error: any) {
      console.error('Sign out error:', error.message);
    }
  };

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
          <TouchableOpacity
            onPress={() => changeProfileDrawerRef.current?.open()}
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLanguageDrawerRef.current?.open()}
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => logoutDrawerRef.current?.open()}
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: Colors.primary}}>Logout</Text>
            <Icon name="arrow-forward" color={Colors.primary} size={24} />
          </TouchableOpacity>
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
      <BottomDrawer ref={changeProfileDrawerRef}>
        <Text style={{padding: 12, fontWeight: 700}}>Ubah Profile</Text>
      </BottomDrawer>
      <BottomDrawer ref={changeLanguageDrawerRef}>
        <Text style={{padding: 12, fontWeight: 700}}>Ubah Bahasa</Text>
      </BottomDrawer>
      <BottomDrawer ref={logoutDrawerRef} initialHeight={250}>
        <Text style={{padding: 12, fontWeight: 700}}>
          Anda Yakin akan Logout?
        </Text>
        <View style={{padding: 12, gap: 12}}>
          <TouchableOpacity
            onPress={() => logoutDrawerRef.current?.close()}
            style={{
              borderColor: Colors.primary,
              padding: 12,
              borderRadius: 8,
              borderWidth: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.primary, fontWeight: 700}}>
              Kembali
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={signOut}
            style={{
              backgroundColor: Colors.primary,
              padding: 12,
              borderRadius: 8,
              display: 'flex',
              borderColor: Colors.primary,
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.background, fontWeight: 700}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </BottomDrawer>
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
