import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import Greetings from './components/Greetings';
import CardItem from './components/CardItem';
import Section from './components/Section';
import { NavigationProp } from '@react-navigation/native';

const BerandaScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const PurchaseReportContent = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{gap: 10, flexDirection: 'row', paddingHorizontal: 12}}>
          {[
            {
              title: 'Brokoli',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
          ].map((item, index) => (
            <CardItem
              key={index}
              title={item.title}
              description={item.descripotion}
            />
          ))}
        </View>
      </ScrollView>
    );
  };
  const SalesReportContent = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{gap: 10, flexDirection: 'row', paddingHorizontal: 12}}>
          {[
            {
              title: 'Brokoli',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
            {
              title: 'Paprika',
              descripotion: '20kg',
            },
          ].map((item, index) => (
            <CardItem
              key={index}
              title={item.title}
              description={item.descripotion}
            />
          ))}
        </View>
      </ScrollView>
    );
  };

  const RecentNotaContent = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{gap: 10, flexDirection: 'row', paddingHorizontal: 12}}>
          {[
            {
              title: 'Mang Jaja',
              descripotion: 'Rabu, 23 April 2025',
            },
            {
              title: 'Mang Ikin',
              descripotion: 'Kamis, 24 April 2025',
            }
          ].map((item, index) => (
            <CardItem
              key={index}
              title={item.title}
              description={item.descripotion}
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
        <Section title="Pembelian Hari ini" content={<PurchaseReportContent />} />
        <Section title="Penjualan Hari ini" content={<SalesReportContent />} />
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
