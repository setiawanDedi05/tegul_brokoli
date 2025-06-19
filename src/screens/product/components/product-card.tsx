import React from 'react';
import {Dimensions, Image, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {THEME} from '../../../constants/theme';
import {Images} from '../../../constants/images';
import {formatRupiah} from '../../../utils/FormatRupiah';
import {FontPreset} from '../../../constants/font-preset';

interface IProductCardProps {
    title: string;
    price: number;
    image?: ImageSourcePropType;
}
const ProductCard = ({image = Images.imageDefault, price, title}: IProductCardProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={FontPreset.title}>{title}</Text>
        <Text style={FontPreset.bigPrice}>{formatRupiah(price)}</Text>
        <TouchableHighlight style={styles.button}>
          <Text
            style={{
              color: Colors.background,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Masukan Nota
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.background,
    display: 'flex',
    gap: 10,
    width:  '48%',
    borderRadius: 16,
    ...THEME.shadow,
  },
  imageContainer: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    padding: 8,
    ...THEME.shadow,
  },
  image: {width: 80, height: 80},
  titleContainer: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ProductCard;
