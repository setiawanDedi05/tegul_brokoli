import React, { useEffect } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BottomDrawer, { BottomDrawerMethods } from 'react-native-animated-bottom-drawer'
import { useProductStore } from '../../../store/product.store'
import ProductCard from './ProductCard'
import { formatRupiah } from '../../../utils/FormatRupiah'
import { Colors } from '../../../constants/colors'
import { THEME } from '../../../constants/theme'
import Icon from 'react-native-vector-icons/Ionicons';


interface IProductDrawerProps {
    ref: React.Ref<BottomDrawerMethods> | undefined
}
const ProductDrawer = ({ref}: IProductDrawerProps) => {
    const {products, getProducts, addSelectedProduct} = useProductStore() 

    useEffect(() => {
        getProducts()
    },[])
  return (
    <BottomDrawer ref={ref}>
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
              {products.map((item, index) => (
                <ProductCard
                  key={index}
                  title={item.product_name}
                  description={`${formatRupiah(item.price)}/${item.unit}`}
                  descTextStyle={{fontSize: 10, fontWeight: 'regular'}}
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
  )
}

const styles = StyleSheet.create({
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

export default ProductDrawer