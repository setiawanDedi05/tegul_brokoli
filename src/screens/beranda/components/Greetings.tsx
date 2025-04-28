import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../../constants/colors';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Greetings = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        padding: 12
      }}>
      <View style={{flexDirection: 'row', alignItems: 'baseline', gap: 5}}>
        <Text style={{fontSize: 20, color: Colors.primary}}>Hallo,</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.primary}}>
          Dedi
        </Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="time" size={25} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Greetings;
