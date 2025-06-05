import React from 'react';
import {Item} from '..';
import {StyleSheet, Text, View} from 'react-native';
import {formatRupiah} from '../../../utils/FormatRupiah';
import {Colors} from '../../../constants/colors';
import Row from '../../../components/Row';

interface SummaryItemProps {
  items: Item[];
  unitLabel: 'Kg' | 'Pcs';
}
const SummaryItem = ({items, unitLabel}: SummaryItemProps) => {
  // Jika tidak ada item, tidak perlu merender ringkasan
  if (!items || items.length === 0) {
    return null;
  }

  // Hitung total quantity
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  // Hitung total harga keseluruhan (sum dari kolom 'total')
  const overallTotalPrice = items.reduce((sum, item) => sum + item.total, 0);

  return (
    <View style={styles.root}>
      <Row>
        <Text style={styles.label}>Total Barang yang dibeli:</Text>
        <Text style={styles.value}>
          {totalQuantity} {unitLabel}
        </Text>
      </Row>
      <Row>
        <Text style={styles.label}>Total Harga Keseluruhan: </Text>
        <Text style={styles.value}>{formatRupiah(overallTotalPrice)}</Text>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 10,
    borderTopColor: Colors.primary,
    borderTopWidth: 2,
  },
  value: {
    textAlign: 'left',
    fontWeight: 700,
  },
  label: {
    textAlign: 'left',
  },
});

export default SummaryItem;
