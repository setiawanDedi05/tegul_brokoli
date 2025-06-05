import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductCard from './components/ProductCard';
import BottomDrawer, {
  BottomDrawerMethods,
} from 'react-native-animated-bottom-drawer';
import {THEME} from '../../constants/theme';
import {NavigationProp} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';

const createNotaValidationSchema = yup.object().shape({
  type: yup.string(),
  name: yup.string(),
  // .required('nama wajib diisi mang'),
  alamat: yup.string(),
  // .required('Alamat wajib diisi mang'),
  items: yup.array(),
});
const NotaScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);
  const [productList, setProductList] = useState([
    {
      name: 'Brokoli',
      total: '20kg',
    },
    {
      name: 'Cabe',
      total: '20kg',
    },
    {
      name: 'Timun',
      total: '20kg',
    },
  ]);
  const [selectedProductList, setSelectedProductList] = useState([
    {
      name: 'Brokoli',
      total: '20kg',
    },
  ]);

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
        <Text style={{fontSize: 24, fontWeight: 'bold', padding: 12}}>
          Buat Nota
        </Text>
        <Formik
          validationSchema={createNotaValidationSchema}
          initialValues={{type: 'pembelian', name: '', alamat: '', items: []}}
          onSubmit={() => {
            console.log("kesini")
            navigation.navigate(Routes.ReviewNota);
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
            <View style={{gap: 20, padding: 12}}>
              <View style={{gap: 10}}>
                <Text>Type</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 300,
                  }}>
                  <Pressable
                    onPress={() => handleChange('type')('pembelian')}
                    style={{
                      width: 150,
                      backgroundColor:
                        values.type === 'pembelian'
                          ? Colors.primary
                          : 'transparent',
                      padding: 12,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderTopLeftRadius: 8,
                      borderBottomLeftRadius: 8,
                      borderWidth: 1,
                      borderRightWidth: 0,
                    }}>
                    <Text
                      style={{
                        fontWeight: '700',
                        color:
                          values.type === 'pembelian'
                            ? Colors.background
                            : Colors.primary,
                      }}>
                      Pembelian
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => handleChange('type')('penjualan')}
                    style={{
                      width: 150,
                      backgroundColor:
                        values.type === 'penjualan'
                          ? Colors.primary
                          : 'transparent',
                      padding: 12,
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: '700',
                        color:
                          values.type === 'penjualan'
                            ? Colors.background
                            : Colors.primary,
                      }}>
                      Penjualan
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={{gap: 10}}>
                <Text>Nama</Text>
                <TextInput
                  placeholder="Masukan Nama"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={{borderWidth: 1, borderRadius: 8, padding: 12}}
                />
                {errors.name && touched.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>
              <View style={{gap: 10}}>
                <Text>Alamat</Text>
                <TextInput
                  multiline
                  placeholder="Masukan Alamat"
                  onChangeText={handleChange('alamat')}
                  onBlur={handleBlur('alamat')}
                  value={values.alamat}
                  style={{
                    borderWidth: 1,
                    minHeight: 100,
                    textAlign: 'left',
                    textAlignVertical: 'top',
                    borderRadius: 8,
                    padding: 12,
                  }}
                />
                {errors.alamat && touched.alamat && (
                  <Text style={styles.errorText}>{errors.alamat}</Text>
                )}
              </View>
              <View style={{gap: 10}}>
                <Text>Items</Text>
                <ScrollView horizontal>
                  <View style={{columnGap: 10, flexDirection: 'row'}}>
                    <Pressable
                      onPress={() => bottomDrawerRef.current?.open()}
                      style={{
                        gap: 10,
                        borderRadius: 8,
                        width: 80,
                        height: 80,
                        backgroundColor: Colors.background,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon name="add" size={30} color={Colors.primary} />
                    </Pressable>
                    {selectedProductList.map((item, index) => (
                      <ProductCard
                        key={index}
                        title={item.name}
                        description={item.total}
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  marginTop: 50,
                }}>
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                  style={{
                    backgroundColor: Colors.background,
                    width: '100%',
                    height: 50,
                    padding: 12,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.primary,
                      fontWeight: '700',
                      fontSize: 14,
                    }}>
                    Buat Nota
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      <BottomDrawer ref={bottomDrawerRef}>
        <ScrollView>
          <Text style={{padding: 12, fontWeight: 700}}>Pilih Produk</Text>
          <ScrollView horizontal>
            <View
              style={{
                columnGap: 10,
                paddingVertical: 10,
                flexDirection: 'row',
              }}>
              <View></View>
              {productList.map((item, index) => (
                <ProductCard
                  key={index}
                  title={item.name}
                  // description={item.total}
                />
              ))}
            </View>
          </ScrollView>
          <View style={{gap: 10, padding: 12}}>
            <Text style={{fontWeight: 700}}>Jumlah Satuan KG</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}>
              <Pressable>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderRadius: 50,
                    padding: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    backgroundColor: Colors.background,
                    ...THEME.shadow,
                  }}>
                  <Icon name="remove" size={24} color={Colors.primary} />
                </View>
              </Pressable>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                // onChangeText={handleChange('name')}
                // onBlur={handleBlur('name')}
                // value={values.name}
                style={{
                  borderWidth: 1,
                  fontSize: 24,
                  textAlignVertical: 'center',
                  textAlign: 'center',
                  borderRadius: 8,
                  padding: 12,
                  width: 50,
                  height: 100,
                }}
              />
              {/* {errors.name && touched.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
            )} */}
              <Pressable>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderRadius: 50,
                    padding: 12,
                    backgroundColor: Colors.background,
                    ...THEME.shadow,
                  }}>
                  <Icon name="add" size={24} color={Colors.primary} />
                </View>
              </Pressable>
            </View>
          </View>
          <TouchableOpacity
            // style={}
            // onPress={() => handleSubmit()}
            style={styles.button}>
            <Text style={{color: Colors.background, fontWeight: 700}}>
              Tambah
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </BottomDrawer>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 20,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 'auto',
  },
});

export default NotaScreen;
