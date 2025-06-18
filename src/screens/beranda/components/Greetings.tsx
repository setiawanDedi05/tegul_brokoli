import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import Lottie from 'lottie-react-native';

const Greetings = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        padding: 12,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'baseline', gap: 5}}>
        <Text style={{fontSize: 20, color: Colors.primary}}>Hallo,</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.primary}}>
          Dedi
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.Histories);
        }}>
        <Lottie
          loop={false}
          source={require('../../../assets/lottie/history.icon.json')}
          style={{width: 36, height: 36}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Greetings;
