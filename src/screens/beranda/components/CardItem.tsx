import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../../constants/colors';

interface ICardItemProps {
    title: string;
    description: string;
    width?:number;
    height?: number;
}
const CardItem = ({title, description, height=100, width=100}: ICardItemProps) => {
  return (
    <View
      style={{
        backgroundColor: Colors.background,
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
      }}>
      <Text style={{fontSize: 14}}>{title}</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>{description}</Text>
    </View>
  );
};

export default CardItem;
