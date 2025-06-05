import React, {useRef} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../constants/images';
import {NavigationProp} from '@react-navigation/native';
import {Colors} from '../../constants/colors';
import {Routes} from '../../navigation/routes';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import ViewShot from 'react-native-view-shot';
import { requestPermissions } from '../../utils/permission';

const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Format email salah'),
  // .required('Email wajib diisi mang'),
  password: yup.string().min(6, ({min}) => `Password minimal ${min} karakter`),
  // .required('Password wajib diisi mang'),
});

const LoginScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const viewShotRef = useRef(null);
  const [screenshotUri, setScreenshotUri] = React.useState(null);

  const takeScreenshot = async () => {
    try {
      if (viewShotRef.current) {
        const uri = await viewShotRef.current.capture();
        console.log('URI screenshot:', uri);
        setScreenshotUri(uri);
        Alert.alert('Sukses!', 'Screenshot berhasil diambil.');

        // Opsional: Simpan ke galeri
        await saveScreenshotToCameraRoll(uri);
      }
    } catch (error) {
      console.error('Gagal mengambil screenshot:', error);
      Alert.alert('Gagal!', 'Terjadi kesalahan saat mengambil screenshot.');
    }
  };

  const saveScreenshotToCameraRoll = async uri => {
    requestPermissions.screenSchoot();
    try {
      // Pastikan Anda sudah meminta izin akses ke penyimpanan/galeri
      // Ini adalah contoh sederhana, Anda mungkin perlu menangani izin secara lebih robust
      // menggunakan library seperti react-native-permissions
      await CameraRoll.save(uri, {type: 'photo'});
      Alert.alert('Disimpan!', 'Screenshot berhasil disimpan ke galeri.');
    } catch (error) {
      console.error('Gagal menyimpan ke galeri:', error);
      Alert.alert(
        'Gagal!',
        'Tidak dapat menyimpan screenshot ke galeri. Pastikan izin sudah diberikan.',
      );
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.logoContainer}>
        {screenshotUri && (
          <View>
            <Text>Pratinjau Screenshot:</Text>
            <Image source={{uri: screenshotUri}} />
          </View>
        )}
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.title}>Sayuran Segar, Sehat & Hijau</Text>
      </View>
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0.25}}
          end={{x: 0.5, y: 1}}
          colors={[Colors.primary, Colors.background]}
          angle={160}
          angleCenter={{x: 0.5, y: 0.5}}
          useAngle={true}
          style={styles.formContainer}>
          <ViewShot ref={viewShotRef} options={{format: 'png', quality: 0.9}}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={() => {
                navigation.navigate(Routes.Home);
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <>
                  <View style={styles.inputContainer}>
                    <Icon name="mail-outline" size={25} style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      keyboardType="email-address"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                  <View style={styles.inputContainer}>
                    <Icon
                      name="lock-closed-outline"
                      size={25}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      secureTextEntry
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                  </View>
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSubmit()}
                    disabled={!isValid}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </ViewShot>
          <Button title="Ambil Screenshot" onPress={takeScreenshot} />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    height: '65%',
    width: '100%',
    display: 'flex',
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
    flex: 1,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingVertical: 30,
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: Colors.background,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.background,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 700,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
});
