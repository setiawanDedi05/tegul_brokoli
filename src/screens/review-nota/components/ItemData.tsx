import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ItemDataProps {
  produkName: string;
  quantity: number;
  price: number;
  total: number;
}

const ItemData = ({produkName, quantity, price, total}: ItemDataProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.column}>
        <Text style={styles.textLeft}>{produkName}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.textCenter}>{quantity}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.textLeft}>{price}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.textLeft}>{total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  column: {flex: 1},
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center'
  }
});

export default ItemData;
