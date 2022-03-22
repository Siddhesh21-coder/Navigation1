
import React from 'react';
import { StyleSheet, Text, View,Image,Button, TextInput,TouchableOpacity, Dimensions } from 'react-native';

export default function Second( {navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second Screen</Text>
      
      <Button
        title="Previous Page"
        onPress={() => navigation.navigate('First')}
      />
    </View>
  );
}

