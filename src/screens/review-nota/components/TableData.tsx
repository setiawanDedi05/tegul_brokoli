import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../constants/colors';

interface Item {
    productName: string;
    quantity: number;
    price: number;
    total:number;
}

interface TableDataProps {
    data: Item[];
    
}
const TableData = () => {
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.thText}>Produk</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.thText}>Qty</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.thText}>Harga</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.thText}>Total</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 300,
    height: 300,
    backgroundColor: Colors.background,
    borderRadius: 8,
    padding: 12,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  column: {flex: 1},
  thText: {
    textAlign: 'left',
    fontWeight: 700,
  },
  tdText: {
    textAlign: 'left',
  },
  tdTextCenter: {
    textAlign: 'center'
  }
});

export default TableData;
