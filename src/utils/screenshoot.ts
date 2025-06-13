import { CameraRoll } from "@react-native-camera-roll/camera-roll";

export const takeScreenshot = async (viewShotRef: React.RefObject<any>, onSuccess: () => void, onError: () => void) => {
    try {
      if (viewShotRef.current) {
        const uri = await viewShotRef.current.capture();
        await saveScreenshotToCameraRoll(uri, onSuccess, onError);
      }
    } catch (error) {
      onError()
    }
  };

  const saveScreenshotToCameraRoll = async (uri: string, onSuccess: () => void, onError: () => void) => {
    try {
      // Pastikan Anda sudah meminta izin akses ke penyimpanan/galeri
      // Ini adalah contoh sederhana, Anda mungkin perlu menangani izin secara lebih robust
      // menggunakan library seperti react-native-permissions
      await CameraRoll.save(uri, {type: 'photo'});
      onSuccess()
    } catch (error) {
      onError()
    }
  };