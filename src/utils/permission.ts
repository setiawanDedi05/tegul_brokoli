import {Alert, PermissionsAndroid, PermissionStatus, Platform} from 'react-native';

export const requestPermissions = {
  writeData: async () => {
    try {
      if (Platform.OS === 'android') {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Izin Penyimpanan Dibutuhkan',
            message:
              'Aplikasi ini perlu akses penyimpanan Anda untuk mendemonstrasikan fitur tertentu.',
            buttonNeutral: 'Nanti',
            buttonNegative: 'Tolak',
            buttonPositive: 'Izinkan',
          },
        );
        console.log({permission});
        if (permission === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        }
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  postNotification: async () => {
    let notificationsPermissionCheck: PermissionStatus = 'granted';

    if ((Platform.Version as number) >= 33) {
      notificationsPermissionCheck = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    }
    return notificationsPermissionCheck;
  },
  camera: async () => {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Izin Kamera Dibutuhkan',
        message:
          'Aplikasi ini perlu akses kamera Anda untuk mendemonstrasikan fitur tertentu.',
        buttonNeutral: 'Nanti',
        buttonNegative: 'Tolak',
        buttonPositive: 'Izinkan',
      },
    );
    console.log({permission});
    if (permission === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    return false;
  },
  screenSchoot: async () => {
    if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Izin Penyimpanan',
              message: 'Aplikasi ini membutuhkan akses ke penyimpanan Anda untuk menyimpan screenshot.',
              buttonNeutral: 'Nanti',
              buttonNegative: 'Batal',
              buttonPositive: 'OK',
            },
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert('Izin Ditolak', 'Tidak dapat menyimpan screenshot karena izin penyimpanan tidak diberikan.');
            return;
          }
        } catch (err) {
          console.warn(err);
          Alert.alert('Gagal Izin', 'Terjadi kesalahan saat meminta izin penyimpanan.');
          return;
        }
      }
  }
};
