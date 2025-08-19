import React from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import {Colors} from '../../../constants/colors';

interface IProductCardProps {
    title: string;
    description?: string
    descTextStyle?: StyleProp<TextStyle>
}
const ProductCard = ({title, description, descTextStyle}: IProductCardProps) => {
  return (
    <View
      style={{
        gap: 10,
        width: 80,
        height: 80,
        backgroundColor: Colors.background,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
          width: 5,
          height: -5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        elevation: 3,
        shadowColor: Colors.primary,
      }}>
      <Text style={{fontSize: 12}}>{title}</Text>
      {description && <Text style={descTextStyle ?? {fontSize: 14, fontWeight: 'bold'}}>{description}</Text>}
    </View>
  );
};

export default ProductCard;
