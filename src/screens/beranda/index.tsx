import React, { useEffect } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import Greetings from './components/Greetings';
import CardItem from './components/CardItem';
import Section from './components/Section';
import { NavigationProp } from '@react-navigation/native';
import { useTransactionStore } from '../../store/transactions.store';
import dayjs from 'dayjs';
import { FormatDate } from '../../constants/format';

const BerandaScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {getTransactions, recentTransactions, sellItems, buyItems} = useTransactionStore();

  useEffect(() => {
    getTransactions()
  },[])

  const PurchaseReportContent = () => {
    if(buyItems.length){
      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{gap: 10, flexDirection: 'row', paddingHorizontal: 12}}>
            {buyItems.map((item, index) => (
              <CardItem
                key={`${item.id}-buy`}
                title={item.id}
                description={`${item.qty} Kg`}
              />
            ))}
          </View>
        </ScrollView>
      );
    }
    return (
      <View style={{padding: 20}}>
        <Text style={{textAlign: 'center'}}>Belum ada Pembelian Barang Hari ini</Text>
      </View>
    )
  };

  const SalesReportContent = () => {
    if(sellItems.length){
      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{gap: 10, flexDirection: 'row', paddingHorizontal: 12}}>
            {sellItems.map((item, index) => (
              <CardItem
                key={`${item.id}-sell` }
                title={item.id}
                description={`${item.qty} Kg`}
              />
            ))}
          </View>
        </ScrollView>
      );
    }
    return (
      <View style={{padding: 20}}>
        <Text style={{textAlign: 'center'}}>Belum ada Penjualan Barang Hari ini</Text>
      </View>
    )
  };

  const RecentNotaContent = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{gap: 10, flexDirection: 'row', paddingHorizontal: 12}}>
          {recentTransactions.map((item, index) => (
            <CardItem
              key={index}
              title={item.desc}
              description={dayjs.unix(item.date._seconds).format(FormatDate.transactionUI)}
              width={200}
              height={200}
            />
          ))}
        </View>
      </ScrollView>
    );
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
      <Greetings navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <Section title="Pembelian Akhir-akhir ini" content={<PurchaseReportContent />} />
        <Section title="Penjualan Akhir-akhir ini" content={<SalesReportContent />} />
        <Section title="Nota Akhir-akhir ini" content={<RecentNotaContent />} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 20,
    paddingBottom: 12
  },
});

export default BerandaScreen;
