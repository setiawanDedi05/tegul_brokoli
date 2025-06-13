import React, {useRef} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';
import {Images} from '../../constants/images';
import TableData, {ColumnType} from '../../components/CustomTable';
import SummaryItem from './components/SummaryItem';
import {formatRupiah} from '../../utils/FormatRupiah';
import ViewShot from 'react-native-view-shot';
import {takeScreenshot} from '../../utils/screenshoot';
import {checkMultiple, PERMISSIONS} from 'react-native-permissions';
import WatermarkContainer from '../../components/WatermarkContainer';

export interface Item {
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

const ReviewNota = () => {
  const viewShotRef = useRef(null);

  checkMultiple([
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ]).then(statuses => {
    console.log('read', statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);
    console.log('write', statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);
  });

  const columns: ColumnType<Item>[] = [
    {
      title: 'No',
      numerization: true,
      width: 20,
    },
    {
      title: 'Produk',
      key: 'productName',
      width: 70,
    },
    {
      title: 'Jml',
      key: 'quantity',
      width: 40,
    },
    {
      title: 'Harga',
      key: 'price',
      render: (_, record) => {
        return <Text>{formatRupiah(record.price)}</Text>;
      },
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => {
        return <Text>{formatRupiah(record.total)}</Text>;
      },
    },
  ];

  const data: Item[] = [
    {
      productName: 'Brokoli',
      quantity: 20,
      price: 10000,
      total: 200000,
    },
    {
      productName: 'Wortel',
      quantity: 20,
      price: 10000,
      total: 200000,
    },
    {
      productName: 'Paprika',
      quantity: 20,
      price: 10000,
      total: 200000,
    },
  ];
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
        <ViewShot ref={viewShotRef} options={{format: 'png', quality: 0.9}}>
            <TableData
              header={
                <>
                <WatermarkContainer />
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
                    </>
              }
              columns={columns}
              data={data}
              footer={<SummaryItem items={data} unitLabel="Kg" />}
            />
        </ViewShot>
        <Button
          title="Ambil Screenshot"
          onPress={() =>
            takeScreenshot(
              viewShotRef,
              () => {
                Alert.alert('Berhasil', 'Screenshot berhasil diambil');
              },
              () => {
                Alert.alert('Gagal', 'Screenshot gagal diambil');
              },
            )
          }
        />
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
