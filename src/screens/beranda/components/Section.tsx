import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CardItem from './CardItem';
interface SectionProps {
    title: string;
    content: React.ReactNode
}
const Section = ({title, content}: SectionProps) => {
  return (
    <View style={{gap: 20, paddingVertical: 10}}>
      <Text style={{fontSize: 14, fontWeight: 'bold', paddingHorizontal: 12}}>
        {title}
      </Text>
      {content}
    </View>
  );
};

export default Section;
