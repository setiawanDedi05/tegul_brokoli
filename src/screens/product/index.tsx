import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';
import {Images} from '../../constants/images';
import ProductCard from './components/product-card';

const ProductScreen = () => {
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
          display: 'flex',
          justifyContent: 'flex-start',
          width: '100%',
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: Colors.primary}}>
          Product
        </Text>
      </View>
      <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
        <View style={{flexWrap: 'wrap', width: '100%', flexDirection: 'row', gap: 10}}>
          {Array.from({length: 10}).map((_, index) => (
            <ProductCard
              key={index}
              image={Images.imageDefault}
              title={`Product ${index + 1}`}
              price={10000}
            />
          ))}
        </View>
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
export default ProductScreen;
