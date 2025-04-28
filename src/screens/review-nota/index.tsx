import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';
import {Images} from '../../constants/images';

const ReviewNota = () => {
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
        <View style={styles.imageContainer}>
          <Text style={{fontWeight: 700, fontSize: 24}}>Nota Pembelian</Text>
          <Image source={Images.logo} style={styles.image} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <View style={{width: '50%'}}>
            <Text style={{fontWeight: 700}}>Dedi Setiawan</Text>
            <Text style={{fontSize: 10}}>
              Kp. Pacet Beunying, RT/RW. 01/07. Pacet, Beunying, Cianjur
            </Text>
          </View>
          <Text>Senin, 28 April 2025</Text>
        </View>
        <View
          style={{
            width: 300,
            height: 300,
            backgroundColor: Colors.background,
            borderRadius: 8,
            padding: 12,
            gap: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left', fontWeight: 700}}>Produk</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left', fontWeight: 700}}>Qty</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left', fontWeight: 700}}>Harga</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left', fontWeight: 700}}>Total</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>Brokoly</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>12</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>10000</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>120000</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>Wortel</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>12</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>10000</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>120000</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>Daun Bawang</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>12</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>10000</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'left'}}>120000</Text>
            </View>
          </View>
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
  imageContainer: {
    width: '100%',
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});

export default ReviewNota;
