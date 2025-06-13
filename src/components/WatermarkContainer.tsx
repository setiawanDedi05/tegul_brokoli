import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import {Images} from '../constants/images';

const {width, height} = Dimensions.get('window'); // Mendapatkan lebar dan tinggi layar

interface WatermarkContainerProps {
  image?: ImageSourcePropType;
  imageSize?: number;
  spacing?: number;
  rotationDegrees?: number;
}

const WatermarkContainer = ({
  image = Images.logo,
  imageSize = 50,
  spacing = 30,
  rotationDegrees = -45,
}: WatermarkContainerProps) => {
  // Hitung berapa banyak gambar yang dibutuhkan untuk menutupi layar
  const numCols = Math.ceil(width / (imageSize + spacing));
  const numRows = Math.ceil(height / (imageSize + spacing));

  const watermarkElements = [];
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      watermarkElements.push(
        <Image
          key={`${r}-${c}`} // Key unik untuk setiap gambar
          source={image}
          style={[
            styles.watermarkTile,
            {
              left: c * (imageSize + spacing) - 50,
              top: r * (imageSize + spacing) - 50,
              transform: [{rotate: `${rotationDegrees}deg`}], // Terapkan kemiringan di sini
            },
          ]}
        />,
      );
    }
  }

  return (
    <View style={styles.container}>
      {watermarkElements}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  watermarkTile: {
    position: 'absolute', // Penting untuk posisi absolut
    width: 80,
    height: 100,
    opacity: 0.2, // Transparansi
    zIndex: 1, // Kirim ke belakang konten
  }
});

export default WatermarkContainer;
