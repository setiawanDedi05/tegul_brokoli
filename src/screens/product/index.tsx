import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';
import {Images} from '../../constants/images';
import ProductCard from './components/product-card';
import Icon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../../constants/theme';
import BottomDrawer, {
  BottomDrawerMethods,
} from 'react-native-animated-bottom-drawer';
import {launchImageLibrary} from 'react-native-image-picker';

const ProductScreen = () => {
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);
  const [image, setImage] = React.useState<string | null>(null);
  // To pick from the image library
  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {
          uri: response && response.assets ? response?.assets[0]?.uri : '',
        };
        // Use the 'source' URI to display the image
        setImage(source.uri ?? null);
      }
    });
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
        <View
          style={{
            flexWrap: 'wrap',
            width: '100%',
            flexDirection: 'row',
            gap: 10,
          }}>
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
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => bottomDrawerRef.current?.open()}>
        <Icon name="add-outline" size={25} color={Colors.background} />
      </TouchableOpacity>
      <BottomDrawer ref={bottomDrawerRef}>
        <Text style={{padding: 12, fontWeight: 700}}>Tambah Produk</Text>
        <View style={{height: 350}}>
          <ScrollView>
            <View style={{gap: 10, padding: 12}}>
              <Text style={{fontWeight: 700}}>Nama Produk</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <TextInput
                  placeholder="Nama produk"
                  keyboardType="default"
                  // onChangeText={handleChange('name')}
                  // onBlur={handleBlur('name')}
                  // value={values.name}
                  style={{
                    borderWidth: 2,
                    fontSize: 14,
                    textAlignVertical: 'center',
                    borderRadius: 8,
                    padding: 12,
                    width: '100%',
                  }}
                />
              </View>
            </View>
            <View style={{gap: 10, padding: 12}}>
              <Text style={{fontWeight: 700}}>Harga Produk</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <TextInput
                  placeholder="Harga produk"
                  keyboardType="numeric"
                  // onChangeText={handleChange('name')}
                  // onBlur={handleBlur('name')}
                  // value={values.name}
                  style={{
                    borderWidth: 2,
                    fontSize: 14,
                    textAlignVertical: 'center',
                    borderRadius: 8,
                    padding: 12,
                    width: '100%',
                  }}
                />
              </View>
            </View>
            <View style={{gap: 10, padding: 12}}>
              <Text style={{fontWeight: 700}}>Gambar Produk</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                {image ? (
                  <View>
                  <Image
                    source={{uri: image}}
                    style={{width: 100, height: 100, borderRadius: 8}}
                  />
                  <TouchableOpacity
                    onPress={() => setImage(null)}
                    style={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      borderRadius: '50%',
                      padding: 12,
                      backgroundColor: Colors.failed,
                      width: 40,
                      height: 40,
                    }}>
                    <Icon name="remove-outline" size={16} color={Colors.background} />
                  </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={pickImage}
                    style={{
                      borderWidth: 2,
                      borderRadius: 8,
                      padding: 12,
                    }}>
                    <Icon name="add-outline" size={25} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={{gap: 10, padding: 12}}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  backgroundColor: Colors.primary,
                  borderRadius: 8,
                  padding: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                // onPress={() => handleSubmit()}
              >
                <Text style={{color: Colors.background, fontWeight: 700}}>
                  Tambah
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </BottomDrawer>
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
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: '50%',
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.background,
    ...THEME.shadow,
  },
});
export default ProductScreen;
